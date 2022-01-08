import React from 'react'
import HourlyCarousal from '../hourlyForecast'

export default function DetailsCard() {
    return (
        <div  className='container mb-5 mt-3 text-center ' style={{ border: '1px solid black', background: '#e7f1ff'}}>
            <div className='row'> 
                <div className='col'>
                    <h4 className='w-heading-4'>
                        <span>Dec 26 &nbsp;</span>
                        <span>Sunday &nbsp;</span>
                        <span>23:58 &nbsp;</span>
                    </h4>
                    <div className='row mx-md-4 my-5' >
                        <div className='col-md-7 w-text-3 text-start'>
                            <div className='mb-md-1'>Mostly Clouded</div>
                            <div className='mb-md-1'>Rain Possibility 60%</div>
                            <div className='mb-md-1'>Temp 25 &#8451;</div>
                            <div className='mb-md-2'>Wind 8 KM/Hr, <span>From South East</span></div>
                            <div className='mb-md-2'>Visibility 16 KM</div>
                        </div>
                        <div className='col-md-5 w-text-3 text-start text-md-end '>
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
                    <div className='row'>
                        <div className='col'>
                            <img src='https://w.tt/3EDeDR0' style={{maxWidth: '250px'}} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col'>
                            <HourlyCarousal/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
