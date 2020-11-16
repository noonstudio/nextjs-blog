import Image from 'next/image'
import styles from './carousel-item.module.css'

export default function TinyItem({
  title,
  coverImage
}) {
  return (
	 <> 
	  
      <div className=" inner ">
	  	<a href="">
          <div className="explore">
	  		<h4 className="explore-link-header">{title}</h4>
	  		<p className="explore-description">{title}</p>
          </div>
	  	</a>
	  
	  
		<img
		  src={coverImage?.sourceUrl}
		  className="zoom_animate"
		/>			  
	  
      </div>
	  
	  </>

  )
}
