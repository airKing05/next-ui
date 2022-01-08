import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';


export default function DayCarousal() {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
           
            {
                breakpoint: 990,
                settings: {
                  slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
              },
           {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1.8,
                  slidesToScroll: 1
                }
              }
          ]
    };
    return (
        <div className="container my-5 text-center" style={{ padding: '0px !important' }}>
        <h4 className="w-heading-4">check the price by monthly</h4>
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
}
