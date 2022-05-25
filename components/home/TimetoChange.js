import React from 'react';
import ReactPlayer from 'react-player/lazy';


const TimeToChange = () => {
    return (
        <div className='container border bg-light my-2' style={{maxWidth: '100%'}}>
           <div className="row my-5 mx-5">
           <h3 className='h1-heading-3 d-md-none'>It's time to <span className='color-1'>change</span></h3>
               <div className='col-md-6'>
               <ReactPlayer 
               url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
               width='100%'
               height= '100%' />
               </div>
               <div className='col-md-6 '>
                   <h3 className='h1-heading-3 d-none d-md-block'>It's time to <span className='color-1'>change</span></h3>
                   <p className='p-text-4 color-2'>Are you a farmer want to sell your crops, looking for best prices in Mandi. khet me buaai krani hai lekin weather khraba na ho jaye? to sahi weather sahi price, aap bilkul sahi jagah pr hai. Dekho krashak bahut hi asan bhasha me ashani se <br/>
                   Dekho Krashak is a holistic B2C platform offering trading, price and weather info services, all under one website.</p>
               </div>
           </div>
        </div>

    )
}

export default TimeToChange;