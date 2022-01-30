import React from 'react';
import Link from 'next/link';
import ThemeButton from './darkTheme/ThemeButton';

export default function Navbar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
          <a className="navbar-brand" >Dekho Krashak</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto" >
              <li className="nav-item">
                <Link  href="/listing">
                <a className="nav-link">Listing</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  href="/blogs">
                <a className="nav-link">Blogs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  href="/weather">
                <a className="nav-link">Weather</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                <a className="nav-link">Contact us</a>
                </Link>
              </li>
              <li className="nav-item">
               {/* <ThemeButton/> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>   
        </>
    )
}
