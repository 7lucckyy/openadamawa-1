import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';


function Template() {
  return (
    <main className=''>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
  )
}

export default Template