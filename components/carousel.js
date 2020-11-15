import TinyItem from '../components/carousel-item'
import styles from './carousel.module.css'

var tiny_init = false;
function onScroll() {
	
	if(!tiny_init){
		
		add_tiny();
	}
}

function add_tiny(){

myStopFunction();
	
	
  var slider = tns({
    container: '.what-else-on-offer',
    items: 1,	  
    slideBy: 1,
    loop: true,
    navAsThumbnails: true,
    arrowKeys: true,
    mouseDrag: true,
    controls: false,  
    gutter: 10,
    navPosition: 'bottom',	  

    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });	
	
}





var myVar = setInterval(myTimer, 1000);

function myTimer() {
	add_tiny();

}

function myStopFunction() {
  clearInterval(myVar);
}


export default function Slider( { posts } ) {
	
	


	
  return(

	  <div className="col-full"> 
	  	<div className="container mx-auto px-5"> 
		  <div className="what-else-on-offer"> 


			{ posts.map( x => (
				<TinyItem

					title = {x.title}
					coverImage = {x.featuredImage?.node}

				/>

			)) }	  


		  </div>
        </div>
      </div>
	  
	  
	  )
}