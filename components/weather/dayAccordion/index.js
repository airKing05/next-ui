import React from 'react'
import DetailsCard from './DetailsCard';
import { UilClouds } from '@iconscout/react-unicons'

export default function DayAccordion() {
    return (
        <div className='container' style={{marginBottom: '150px'}}>
            <h4 className='w-heading-4'>15 Days forecast</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample" >
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ background: '' }}>
                            <span className='w-heading-5' style={{padding: '0px !important'}}>Today</span>
                            <span className=''><UilClouds/></span>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <DetailsCard />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ background: '' }}>
                            Thursday, 30 Dec
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <DetailsCard />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ background: '' }}>
                            Friday, 31 Dec
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <DetailsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
