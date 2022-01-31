import React from 'react';


const CropInfoData = () => {
    return (
        <div className='container my-5 text-center border' style={{padding: '', maxWidth: '100%'}}>
            <h1 className='h1-heading-1 mb-4'>
                <span style={{ color: '#000000' }}>Losses of </span> <span style={{ color: '#ed743e' }}> Crops</span>
            </h1>
            <div className='row mb-2' style={{padding: '0px'}}>
                <div className='col-md-3 mb-3 bg-light'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'>₹55,600<label className='h1-heading-4'>Crore</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6 color-21'>Total losses per</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3 bg-info'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'>~16,500<label className='h1-heading-4'>Crore</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6  color-21'>FoodGrain waste per year after harvesting</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3 bg-light'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'>5<label className='h1-heading-4'>M</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6  color-21'>Hectares of land crops loss due to Rain fall in 2021</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3 bg-info'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'> ~₹10<label className='h1-heading-4'>K+</label> </span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6  color-21'>Annual Gross profit of farmer</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CropInfoData;