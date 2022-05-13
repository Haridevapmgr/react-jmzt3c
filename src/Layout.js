import { Outlet, Link } from 'react-router-dom';
import './App.css';
import React from 'react';

const Layout = () => {
  return (
    <>
      <body>
        <div className="heading">
          <div
            className="jumbotron text-center"
            style={{ backgroundColor: 'black' }}
          >
            <marquee style={{ width: '60%', color: 'white' }}>
              This is my own Project Developed by Reactjs
            </marquee>
            <h1 className="myname">HARIHARAN.G</h1>
            <p style={{ color: 'grey' }}>Web developer</p>

            <ul className="nav nav-tabs nav-justified ">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>

              <li class="nav-item ">
                <Link to="/Contact" class="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>

      <Outlet />
    </>
  );
};

export default Layout;
