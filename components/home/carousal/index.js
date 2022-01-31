import React from 'react'
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImagesCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: true
              }
            },
            
          ]
    };
    return (
        <div className="mb-5 pb-5 text-center" style={{ padding: '0px ' }}>
        <div>
            <Slider {...settings}>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </Slider>
        </div>

    </div>
    )
};
