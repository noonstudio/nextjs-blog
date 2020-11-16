import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import TinyItem from '../components/carousel-item'
import styles from './carousel.module.css'

// Container for isotope grid
class ItemGrid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { tinyslider: null };
    }

    render() {
        return(
			
			<>
			
            <div className="col-full"> 
              <div className="container mx-auto px-5"> 
                <div className="what-else-on-offer"> 


                  { this.props.posts.map( x => (
                      <TinyItem

                          title = {x.title}
                          coverImage = {x.featuredImage?.node}

                      />

                  )) }	  


                </div>
              </div>
            </div>

			</>
        )
    }

    // set up isotope
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
		console.log(node);
		
        if (!this.state.tinyslider) {
            this.setState({
                tinyslider: tns({
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
						  })	
            });
			
        } else {
			
            if (this.state.tinyslider) this.state.tinyslider.destroy();
			
        }
    }

    // update isotope layout
    componentDidUpdate(prevProps) {
				
       if (this.state.tinyslider) this.state.tinyslider.destroy();
		

    }

  componentWillUnmount() {
	  
    if (this.state.tinyslider) this.state.tinyslider.destroy();
	  
  }

}

export default ItemGrid;