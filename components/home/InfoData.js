import React from 'react';


const InfoData = () => {
    return (
        <div className='container mt-0 text-center border' style={{padding: '', maxWidth: '100%'}}>
            <h1 className='h1-heading-1'>
                <span style={{ color: '#000000' }}>Basic Data of </span> <span style={{ color: '#ed743e' }}> Indian Farmer</span>
            </h1>
            <div className='row mb-2' style={{padding: '0px'}}>
                <div className='col-md-3 mb-3'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'>25<label className='h1-heading-4'>M+</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6 color-21'>Dependent On Agriculture</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'>~2.5<label className='h1-heading-4'>Acr</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6  color-21'>Avg. Agricultural land hold one farmer's family</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3'>
                    <div className='row'>
                        <span className='h1-heading-1 color-1'> ~₹1<label className='h1-heading-4'>Lakh</label></span>
                    </div>
                    <div className='row'>
                        <span className='h1-heading-6  color-21'>Annual income of farmer</span>
                    </div>
                </div>
                <div className='col-md-3 mb-3'>
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

export default InfoData;