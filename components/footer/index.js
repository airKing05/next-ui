import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo2 from '../../images/logo-2.png';


const Footer = () => {
    return (
        <div className="container fixed-bottom bg-info" style={{ maxWidth: '100%', padding: '0px !important' }}>
            <div className="row pt-3 px-5 mb-5 d-flex">
                <div className="col-6 " >
                    <div className="row d-flex justify-content-center " style={{ maxWidth: '200px', height: '50px' }}>
                        <Image src={Logo2} className="" layout="responsive" alt="brand logo" />
                    </div>
                    <div className="row">
                        <h5 className="" style={{ paddingLeft: '45px' }}>Let's change the future of farmers</h5>
                    </div>
                    <div className="row">
                        <hr style={{ margin: '0px', width: '84%', }} />
                    </div>

                </div>
                <div className="col-3">
                    <h5 className="">Links</h5>
                    <div className="row">
                        <Link href='/contact'>
                            <a>
                                <label style={{ fontSize: '18px' }}>
                                    <i class="fas fa-angle-double-right"></i>
                                </label>
                                <span className="" style={{ paddingLeft: '10px', fontSize: '18px' }}>Contact us</span>
                            </a>
                        </Link>
                    </div>
                    <div className="row">
                        <Link href='/contact'>
                            <a>
                                <label style={{ fontSize: '18px' }}>
                                    <i class="fas fa-angle-double-right"></i>
                                </label>
                                <span className="" style={{ paddingLeft: '10px', fontSize: '18px' }}>Term &#x26; Condition</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="row pb-1" >
                        <Link href="https://facebook.com">
                            <a className="">
                                <label style={{ fontSize: '25px', color: 'blue' }}>
                                    <i class="fab fa-facebook align-middle "></i>
                                </label>
                                <span className="" style={{ paddingLeft: '10px', fontSize: '18px' }}>facebook</span>
                            </a>
                        </Link>
                    </div>
                    <hr style={{ margin: '0px', width: '60%' }} />
                    <div className="row" >
                        <Link href="https://instagram.com">
                            <a className="">
                                <label style={{ fontSize: '25px', color: 'blue' }}>
                                    <i class="fab fa-instagram align-middle "></i>
                                </label>
                                <span className="" style={{ paddingLeft: '10px', fontSize: '18px' }}>Instagram</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row fixed-bottom " style={{ color: '#fff', background: '#000000', }}>
                <div className="col text-center py-2">All content © Copyright 2022 by Dekho Krashak All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;