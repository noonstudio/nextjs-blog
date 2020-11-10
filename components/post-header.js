import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import styles from './post-header.module.css'
import cn from 'classnames'


export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
	  
	  { coverImage ? ( 
	  
      <div className={styles.col_full + ' mb-8 md:mb-16 sm:mx-0'}>
        <CoverImage title={title} coverImage={coverImage} />
      </div>
		  
	   ): ( <></>)  }
		  
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
