import React from 'react';
import Image from "next/image";
import Snow1 from '../../images/snow-1.jpg'
import HourlyCarousal from './hourlyForecast';
import DayCarousal from './dayForecast';
import DayAccordion from './dayAccordion';
import { useSelector } from 'react-redux';
import { UilSearch, UilLocationPoint, UilSun, UilMoon, UilTemperature, UilWind, UilCloudShowers, UilEye } from '@iconscout/react-unicons'
import getFormattedWeatherData from './services/weatherService';

export default function Weather1() {
    const weatherData = useSelector((state) => state.weatherState);
    console.log(weatherData);

    // api work
    const fetchWeather = async () =>{
        const data = await getFormattedWeatherData({q: 'delhi'});
        console.log(data);
    }
    fetchWeather();
    return (
        <div className='container mb-5 pt-5 mt-3 text-center w-bg' >
            <div className='row'>
                <div className='col py-3 d-flex justify-content-center'>
                    <input 
                    className='border form-control  custom-from-control text-capitalize' 
                    placeholder='search by city | village...' 
                    style={{padding:'10px 15px', borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px', maxWidth:'400px'}}/>
                    <span 
                    style={{ padding: '10px 15px' }}>
                    <UilSearch size={25} 
                    className="custom-search-btn" />
                    <UilLocationPoint size={25}
                    className="custom-search-btn " style={{marginLeft: '10px'}} /> 
                    </span>
                </div>
                
            </div>
            <div className='row'>
                <div className='col'>
                    <h2 className='w-heading-1 mt-4'> Kunhari, Kota (Raj) {weatherData[0]}
                    </h2>
                </div>
            </div>

            <div className='row'> 
                <div className='col'>
                    <h4 className='w-heading-4'>
                        <span>Sunday&#44;&nbsp;</span>
                        <span>26&#44; December&#44;2021&nbsp;&#124;&nbsp;</span>
                        <span>Local Time: 23:58 &nbsp;</span>
                    </h4>
                    <div className='' style={{ padding: '15px 35px', fontSize: '25px' }}>
                        <span>°C</span> <span>|</span> <span>°F</span>
                    </div>
                    <div className='row mx-md-4 mt-5' >
                        <div className='col-7 w-text-3 text-start'>
                            <div className='mb-md-1'><UilTemperature/> Temp 25 &#8451;</div>
                            <div className='mb-md-1'><UilWind/> Wind 8 KM/Hr, <span>From South East</span></div>
                            <div className='mb-md-2'><UilEye/> Visibility 16 KM</div>
                            <div className='mb-md-2'><UilCloudShowers/> Rain Possibility 60%</div>
                        </div>
                        <div className='col-5 w-text-3 text-end '>
                            <div className='row d-md-inline-block mb-md-4'>
                                <span className=''>  rise 7:40 <span className='w-text-6'>AM</span></span>
                                <span><UilSun /></span>
                                <span>sun-set 5:49 <span className='w-text-6'>PM</span></span>
                            </div>
                            <div className='row d-md-inline-block'>
                                <span> rise 8:00 <span className='w-text-6'>PM</span></span>
                                <span><UilMoon /></span>
                                <span> moon-set 6:55 <span className='w-text-6'>AM</span></span>
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
            <div className='row'>
                <div className='col'>
                    <DayAccordion/>
                </div>
            </div>

        </div>
    )
}

