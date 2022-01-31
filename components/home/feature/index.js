import React from 'react';
import Image from 'next/image';
import FeatureList from '../../../images/feature-list.png';

const FeatureInfo = () =>{
    return (
        <div className='container-fluid my-5'>
            <div className='row bg-light' style={{height: '400px'}}>
                <div className='col-md-7  py-5 px-5'>
                    <h2 className='h1-heading-2 color-1'>See On Dekho Krashak</h2>
                    <hr className='color-1' style={{width: '25%', height: '3px'}}/>
                    <h5 className='p-text-1 color-1' style={{}}>Daily Price List</h5>
                    <h4 className='h1-heading-3 color-2'>Category. Product. Price.</h4>
                    <p className='p-text-4 color-21'>Are you a farmer want to sell your crops, looking for best prices in Mandi. khet me buaai krani hai lekin weather khraba na ho jaye? to sahi weather sahi price,
                   Dekho Krashak is a holistic B2C platform offering trading, price and weather info services, all under one website.
                   </p>
                </div>
                <div className='col-md-5 py-4 px-5'>
                    <Image src={FeatureList} alt='feature-list-img'/>
                </div>
            </div>
        </div>
    )
}

export default FeatureInfo;