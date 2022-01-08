import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';


export default function HourlyCarousal() {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        speed: 3000,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 5
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3.2,
                slidesToScroll: 3,
                dots: false
              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                dots: false
              }
            }
          ]
    };
    return (
        <div className="container my-3 " style={{ maxWidth: '900px', padding: '0px ' }}>
            <h4 className="w-heading-4">Hourly ForeCast of 28 Dec Tuesday</h4>
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
