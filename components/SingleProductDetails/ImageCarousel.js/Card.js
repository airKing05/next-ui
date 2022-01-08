import React from 'react'

export default function Card() {
    return (
        <div className='container' style={{ maxWidth: '800px' }}>
            <div className="card bg-dark text-white border-0">
                <img src="https://bit.ly/3JtwJbS" class="card-img" alt="..." />
                <div class="card-img-overlay d-flex align-items-end">
                    <div>
                        <h5 className="card-title">Final Stage of Plant</h5>
                        <p className="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
