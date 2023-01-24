import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import React, { useEffect, useState } from "react";

const items = [
    {
        src: "/images/banner/zero.png",
        link: "/"
    },
    {
        src: "/images/banner/one.png",
        link: "/"
    },
    {
        src: "/images/banner/two.png",
        link: "/"
    },
    {
        src: "/images/banner/three.png",
        link: "/"
    }
];

const Slider = (props) => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} dots={true} items={1} autoplay>
                {
                    items.map((item, index) => {
                        return (
                            <img src={item.src} alt={item.src} className={'item'} style={{ borderRadius: '12px', width: '100%', height: 'auto' }} key={`slider-${index}`} />
                        )
                    })
                }
            </OwlCarousel>
        </div>
    )
}

export default Slider;