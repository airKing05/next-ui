import ImagesCarousel from './ImageCarousel.js/index.js'
import React from 'react';
import WeeklyDataTable from './WeeklyDataTable';
import MonthlyDataCarousal from '../MonthlyDataCarousal'


export default function SingleProductDetails() {
   
    return (
        <div className=" container mt-5" style={{ paddingLeft: '0px' }}>
             <h2 className="tsn-heading-1 text-center">Laster Wheat</h2>
            <ImagesCarousel />
            <WeeklyDataTable/>
            <div>Task:  graphical analysis of 7 days</div>
           
            <MonthlyDataCarousal/>
        </div>
    )
}