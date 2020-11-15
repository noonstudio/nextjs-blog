
var tiny_init = false;
function onScroll() {
	
	if(!tiny_init){
		
		add_tiny();
	}
}

function add_tiny(){

  tiny_init = true;	

  var slider = tns({
    container: '.my-slider',
    items: 1,
    mouseDrag: true,
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
        items: 4
      }
    }
  });	
	
}

window.addEventListener('load', add_tiny);
window.addEventListener("scroll", onScroll );

export default function Slider( { post } ) {
	

  return(
	  
	  
	  <div className="my-slider"> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  	<div>{ post }</div> 
	  </div>
	  
	  
	  )
}