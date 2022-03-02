import React from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import Monsoon from '../../images/monsoon.jpg';
import MarketDependent from '../../images/market-dependent.jpg';
import Welfare from '../../images/welfare.jpg';

export default function AgriDependentOn() {
    return (
        <div className='container border bg-light mt-5' style={{ maxWidth: '100%', zIndex: '1' }}>
            <h3 className='h1-heading-3 text-center mt-3'>Indian Agriculture <span className='color-1'>essentially dependent on</span></h3>
            <div className="row my-5 mx-5 pb-4">
                <div className='col-md-4 pt-5'>
                    <div className='card-de bg-white'>
                        <div className='text-center card-de-img-top'>
                            <Image src={Monsoon} className="rounded" layout="responsive" alt='monsoon-img' />
                            <h4 className='card-de-title text-center mt-3'>Monsoon</h4>
                        </div>
                        <div className='card-de-body'>
                            <p className='p-text-4 color-2 card-de-text text-center'>
                                Indian agriculture is essentially monsoon- and market-dependent, and suffers
                                frequent distresses posing threat to the
                                welfare of farmers as well as interest in
                                farming. Declining farm productivity and
                                <div className='btn btn-info my-3' style={{ color: 'blue', cursor: 'pointer' }}>
                                    <Link href='/weather'><a> Check ⛈ weather <i class="fa-solid fa-arrow-right-long"></i></a></Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 pt-5'>
                    <div className='card-de bg-white'>
                        <div className='text-center card-de-img-top'>
                            <Image src={MarketDependent} className="rounded" layout="responsive" alt='market-dependent-img' />
                            <h4 className='card-de-title text-center mt-3'>Market-dependent</h4>
                        </div>
                        <div className='card-de-body'>
                            <p className='p-text-4 color-2 card-de-text text-center'>
                                Indian agriculture is essentially monsoon- and market-dependent, and suffers
                                frequent distresses posing threat to the
                                welfare of farmers as well as interest in
                                farming. Declining farm productivity and
                                <div className='btn btn-info my-3' style={{ color: 'blue', cursor: 'pointer' }}>
                                    <Link href='/weather'><a> Check ⛈ weather <i class="fa-solid fa-arrow-right-long"></i></a></Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 pt-5'>
                    <div className='card-de bg-white'>
                        <div className='text-center card-de-img-top'>
                            <Image src={Welfare} className="rounded" layout="responsive" alt='welfare-img' />
                            <h4 className='card-de-title text-center mt-3'>Welfare of farmers</h4>
                        </div>
                        <div className='card-de-body'>
                            <p className='p-text-4 color-2 card-de-text text-center'>
                                Pm kisan yojna, electrycity bills and market-dependent, and suffers
                                frequent distresses posing threat to the
                                welfare of farmers as well as interest in
                                farming. Declining farm productivity and
                                <div className='btn btn-info my-3' style={{ color: 'blue', cursor: 'pointer' }}>
                                    <Link href='/weather'><a> Check ⛈ weather <i class="fa-solid fa-arrow-right-long"></i></a></Link>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
