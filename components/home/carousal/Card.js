import React from 'react';
import Image from 'next/image';

export default function Card() {
    return (
        <div className='container' style={{ maxWidth: '100%' }}>
            <div className="card">
                <img src="https://bit.ly/3JtwJbS" class="card-img" alt="..." />
                <div class="card-img-overlay text-start">
                    <div>
                        <h3 className="card-title">Can See The Best Price of Your Crop</h3>
                        <p className="card-text">This is a wider card with supporting text <br/> below as a natural lead-in to additional content. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
