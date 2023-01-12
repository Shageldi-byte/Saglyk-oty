import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const items = [
    {
        src:"/images/banner/banner.png",
        link:"/"
    }
];

const Slider = (props) => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} dots={true} items={1}>
                {
                    items.map((item,index)=>{
                        return(
                            <img src={item.src} alt={item.src} className={'item'} style={{borderRadius:'12px',width:'100%',height:'auto'}} key={`slider-${index}`}/>
                        )
                    })
                }
            </OwlCarousel>
        </div>
    )
}

export default Slider;