import React from 'react';
import Image from 'next/image';
import Carousal from './carousal';

const HomePage = () => {
    return (
        <>
          <Carousal/>
            {/* <div className="container mt-5 text-center" style={{maxWidth: '100%', background: '#555555' }}>
                
                <Image src="https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_960_720.jpg" width="500" height="300"></Image>
                <img src="https://cdn.pixabay.com/photo/2020/10/09/20/30/pumpkins-5641482__340.jpg"></img>
            </div> */}
        </>

    )
}

export default HomePage;