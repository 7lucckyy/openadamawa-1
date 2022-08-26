import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from './Header';


function Template() {
  return (
    <main className=''>
        <Header/>
        <Container fluid="md">
            <Outlet/>
        </Container>
      </main>
  )
}

export default Template