import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import React, {useContext, useEffect, useState} from "react";
import {banners} from "../common/data.mjs";
import {Blurhash} from "react-blurhash";
import Image from "mui-image";
import {AppContext} from "../App";

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
    const {isMobile} = useContext(AppContext);
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} dots={true} items={1} autoplay>
                {
                    banners.map((item, index) => {
                        let height = isMobile ? '400px':'470px';
                        return (
                            <Image
                                src={isMobile?item.mobile:item.src}
                                alt={item.src}
                                showLoading={<Blurhash hash={item.hash} style={{ borderRadius: '12px', width: '100%', height: height }}/>}
                                className={'item'}
                                wrapperStyle={{width: '100%', height: height}}
                                style={{ borderRadius: '12px', width: '100%', height: height }}
                                key={`slider-${index}`} />
                        )
                    })
                }
            </OwlCarousel>
        </div>
    )
}

export default Slider;