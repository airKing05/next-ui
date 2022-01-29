import React from "react";
import Image from "next/image";
import Logo1 from '../../images/logo-1.png';
import Mail from './../../images/mail.png'

const Footer = () => {
    return (
        <div className="container fixed-bottom bg-success" style={{ height: '150px', maxWidth: '100%' }}>
            <div className="row">
                <div className="col-6 text-center">
                    <div className="row d-flex justify-content-center " style={{ maxWidth: '50px', height: '50px' }}>
                        <Image src={Logo1} className="" layout="responsive" alt="brand logo" />
                    </div>
                    <div className="row">
                        Let's change the future of farmers
                    </div>
                </div>
                <div className="col-3">Links </div>
                <div className="col-3">follow on</div>
            </div>
            <div className="row fixed-bottom " style={{ color: '#fff', background: '#000000', bottom: '0px', }}>
                <div className="col text-center py-2">All content © Copyright 2022 by Dekho Krashak All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;