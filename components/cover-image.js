import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from './cover-image.module.css'


export default function CoverImage({ title, coverImage, slug }) {
  
const image = (

	<>
		{slug ? (
		 
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 ': slug,
      })}
    />			 
		 
		 ) : ( 

      <Image
        src={ coverImage.sourceUrl}
        alt="Picture of the author"
		layout="fill"
		className="zoom_animate"

      />		
	
	) }
	</>
	
  )
  
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (

		image

      )}
    </div>
  )
}
