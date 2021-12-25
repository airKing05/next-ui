import React from 'react'

export default function ImagesCarousel() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
            <div class="carousel-indicators carousel-indicator-spacer-3 mb-3 ">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner text-center">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img  src="https://cdn.pixabay.com/photo/2011/08/17/12/52/wheat-8762__340.jpg" class="d-block" alt="..." style={{maxWidth: '800px', height:'400px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>this is the plantation of wheat</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img  src="https://strictlymedicinalseeds.com/wp-content/uploads/2020/10/Mayacoba_Bean_hand_500-300x292.jpg" class="d-block" alt="..." style={{maxWidth: '800px', height:'400px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Seeds for wheat of luster type</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="https://th.bing.com/th/id/OIP.3A1F_9LxZXIccD3yAJZYeAHaHa?pid=ImgDet&rs=1" className='d-block' alt="..." style={{maxWidth: '800px', height:'400px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>part of seeds in plant of wheat</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
