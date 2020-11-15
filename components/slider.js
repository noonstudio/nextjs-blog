var callback = function(){
  // Handler when the DOM is fully loaded
	
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
	
};


export default function Slider( { post } ) {
	
	componentDidMount () {
		callback();
	}
	
	render(){

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
}