import React from 'react'
import { } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';


function Template() {
  return (
    <main className=''>
        <Header/>
        <div className="bg-gray">
          <Outlet/>
          <Footer/>
        </div>
      </main>
  )
}

export default Template