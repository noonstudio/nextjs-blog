import React from 'react';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import TinyItem from '../components/carousel-item'


export default function MyCarousel({posts}) {
  return (

		<Carousel
		  plugins={[
			 'arrows',
			{
			  resolve: slidesToShowPlugin,
			  options: {
			   numberOfSlides: 2,
			  },
			},
			{
			  resolve: slidesToScrollPlugin,
			  options: {
			   numberOfSlides: 2,
			  },
			},
		  ]}   
	  
		>

	  
	  
        { posts.map( x => (
                <TinyItem

                    title = {x.title}
                    coverImage = {x.featuredImage?.node}

                />

            )) }	 	
	  </Carousel>	  
	  
  )
}



