import React from 'react'

export default function Card() {
    return (
        <div className='container border rounded' style={{maxWidth:'90px', background:'#fd7e14', padding:'0px '}}>
            <div className='row' style={{padding:'0px !import'}}>
                <div className='col' style={{padding:'0px !import'}}>
                    <div>weather-icon </div>
                    <div className='w-text-3'>18&#8451;</div>
                    <div className=''>13:34<span className='w-text-6'>PM</span></div>
                </div>
            </div>
        </div>
    )
}
