import React from 'react'

export default function Card() {
    return (
        <div className='container border rounded' style={{maxWidth: '150px', background:'#0dcaf0'}}>
            <div className='row'>
                <div className='col py-3 px-2'>
                    <div className='w-text-3'>
                        November
                    </div>
                    <div className='py-2'>Average Price</div>
                </div>
            </div>
        </div>
    )
}
