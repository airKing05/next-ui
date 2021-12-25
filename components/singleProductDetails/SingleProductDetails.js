
import ImagesCarousel from './ImagesCarousel'

import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





export default function SingleProductDetails() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className=" container mt-5" style={{ paddingLeft: '0px' }}>

            <div>this will be a Image slider</div>
            <ImagesCarousel />
            <div>graphical analysis of 7 days</div>
            <div>slider for every month price</div>

            <h2 className="tsn-heading-1 text-center">Laster Wheat</h2>

            <div className="text-center">
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th scope='col' colSpan='3' className='text-center'>Mandi name, district, Raj</th>
                        </tr>
                        <tr>
                            <th>Date-Day</th>
                            <th>Minimum </th>
                            <th>Maximum </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24-12-2021, Thursday</td>
                            <td>1670</td>
                            <td>1810jhfvjkdfv</td>
                        </tr>
                        <tr>
                            <td>25-12-2021, Friday</td>
                            <td>1675</td>
                            <td>1800</td>
                        </tr>
                        <tr>
                            <td>26-12-2021, Thursday</td>
                            <td>1700</td>
                            <td>1850</td>
                        </tr>
                        <tr>
                            <td>26-12-2021, Thursday</td>
                            <td>1700</td>
                            <td>1850</td>
                        </tr>
                        <tr>
                            <td>26-12-2021, Thursday</td>
                            <td>1700</td>
                            <td>1850</td>
                        </tr>
                        <tr>
                            <td>26-12-2021, Thursday</td>
                            <td>1700</td>
                            <td>1850</td>
                        </tr>
                        <tr>
                            <td>26-12-2021, Thursday</td>
                            <td>1700</td>
                            <td>1850</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* <Slider {...settings}>
                <div style={{border: '2px solid black', padding: '40px 40px'}}>
                    this ljkzdfnvlkzdf. zdlf
                </div>
                <div>
                    this ljkzdfnvlkzdf. zdlf
                </div>
                <div>
                    this ljkzdfnvlkzdf. zdlf
                </div>
                <div>
                    this ljkzdfnvlkzdf. zdlf
                </div>
               
              
            </Slider> */}

            {/* <Slider {...settings2}>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
            </Slider> */}
        </div>
    )
}