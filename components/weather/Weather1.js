import React from 'react';
import Snow1 from '../../images/snow-1.jpg'
import HourlyCarousal from './hourlyForecast';
import DayCarousal from './dayForecast';
import DayAccordion from './dayAccordion';

export default function Weather1() {
    return (
        <div className='container mb-5 mt-3 text-center w-bg' style={{}}>
            <div className='row'>
                <div className='col py-3'>
                    <input className='border-0' placeholder='search by city or village' style={{padding:'10px 15px', borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px'}}/>
                    <button className='border-0 bg-info bg-opacity-10' style={{padding:'10px 25px', borderTopRightRadius:'8px', borderBottomRightRadius:'8px'}}>Go</button>

                    <h2 className='w-heading-1 mt-4'>Kunhari, Kota (Raj)</h2>
                </div>
            </div>

            <div className='row'> 
                <div className='col'>
                    <h4 className='w-heading-4'>
                        <span>Dec 26 &nbsp;</span>
                        <span>Sunday &nbsp;</span>
                        <span>23:58 &nbsp;</span>
                    </h4>
                    <div className='row mx-md-4 mt-5' >
                        <div className='col-7 w-text-3 text-start'>
                            <div className='mb-md-1'>Temp 25 &#8451;</div>
                            <div className='mb-md-1'>Wind 8 KM/Hr, <span>From South East</span></div>
                            <div className='mb-md-2'>Visibility 16 KM</div>
                            <div className='mb-md-2'>Rain Possibility 60%</div>
                        </div>
                        <div className='col-5 w-text-3 text-end '>
                            <div className='row d-md-inline-block mb-md-4'>
                                <span className=''>rise 7:40 <span className='w-text-6'>AM</span></span>
                                <span>icon</span>
                                <span>sun-set 5:49 <span className='w-text-6'>PM</span></span>
                            </div>
                            <div className='row d-md-inline-block'>
                                <span>rise 8:00 <span className='w-text-6'>PM</span></span>
                                <span>icon</span>
                                <span>sun-set 6:55 <span className='w-text-6'>AM</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col'>
                {/* <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="250" /> */}
                <img src="https://bit.ly/3Js4daA" alt="this slowpoke moves" width="250" maxHeight="250" style={{backgroundSize: 'cover'}}/>
                </div>
            </div>
            
            {/* hourly forecast */}
            <div className='row mb-3'>
                <div className='col text-center'>
                    <HourlyCarousal/>
                </div>
            </div>

           {/* forecast by day */}
            <div className='row mb-3'>
                <div className='col text-center'>
                    <DayCarousal/>
                </div>
            </div>

            {/* 15 day forecast */}
            <div className='row mb-3'>
                <div className='col'>
                    <DayAccordion/>
                </div>
            </div>

        </div>
    )
}

