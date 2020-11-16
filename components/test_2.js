import TinySlider from "tiny-slider-react";
import TinyItem from '../components/carousel-item'






export default function ItemGrid({posts}) {
	
	
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
  };
	
  return (
	  
	  
  <TinySlider settings={settings}>
      {posts.map((el, index) => (
        <div key={index} style={{ position: "relative" }}>
          
				<TinyItem

					title = {el.title}
					coverImage = {el.featuredImage?.node}

				/>
        </div>
      ))}
  </TinySlider>

  )
	
}
