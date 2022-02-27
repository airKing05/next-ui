import React, {useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar';

function PageNoteFound() {
    const router = useRouter();
    const goToHome = () => {
        router.push('/')
    }
    useEffect(() => {
        setTimeout(() => {
           goToHome()
        }, 3000)
    }, [])
    return (
        <>
        <div className="container py-2" style={{maxWidth: '400px', background: '#888888', marginTop: '20%'}}>
            <div className="row mt-3 text-center">
                <div className="col-2 d-flex justify-content-end">404</div>
                <div className="col-1" style={{padding:'0px !important'}}>||</div>
                <div className="col-9 d-flex justify-content-start">This Page could not be found</div>   
            </div>
            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    
                    <a className="btn btn-outline-success rounded" onClick={goToHome}><i className="fas fa-long-arrow-alt-left"></i> Back to Home</a>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default PageNoteFound

