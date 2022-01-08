import React from 'react'
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImagesCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container my-5 text-center" style={{ padding: '0px !important' }}>
        <h4 className="w-heading-4">Image slider</h4>
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
