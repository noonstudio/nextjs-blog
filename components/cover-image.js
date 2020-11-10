import cn from 'classnames'
import Link from 'next/link'

import styles from './cover-image.module.css'


export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small zoom_animate', {
        'hover:shadow-medium transition-shadow duration-200 ': slug,
      }), styles.zoom_animate }
    />
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
