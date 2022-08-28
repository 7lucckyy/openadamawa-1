import React from 'react'
import { Row, Col } from "react-bootstrap"

function Home() {
  return (
    <Col className="overflow-hidden">
        <Col className="bg-warning shadow-lg">
          <div className="w-75 mx-auto text-center">
            <h1 className="pt-5">Open Contracting For Nigeria</h1>
            <p className="py-5">Budeshi is a dedicated web platform that links budget and procurement data to various public services using the Open Contracting Data Standards (OCDS). The Budeshi platform is primarily being used to demonstrate to public institutions the utility of using uniform data standards to publish and report information across stages in the procurement value chain.</p>
          </div>
        </Col>
      <Row className="mt-5 px-5">
        <Col xs={12} lg={6}>
          <p className="fs-2 fw-bold">Process of Data Collection</p>
          <p className="fs-4">Budeshi gives users access to procurement data such as budget amounts, contract amounts, contractor details, project location, e.t.c from over 90 Ministries, Departments and Agencies (MDAs) in Nigeria at the federal level. Information uploaded on the portal is obtained through freedom of information requests sent to these MDAs in line with the Freedom of Information Act (2011). We make over 300 FOI requests yearly and update the platform with information received from these requests.</p>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/>
        </Col>
      </Row>
      <Row className="d-flex mt-5 px-5">
        <Col xs={12} lg={6} className="order-last order-lg-first d-flex justify-content-center align-items-center">
          <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/>
        </Col>
        <Col xs={12} lg={6} className="order-first order-lg-last">
          <p className="fs-2 fw-bold">Data Processing</p>
          <p className="fs-4">Budeshi gives users access to procurement data such as budget amounts, contract amounts, contractor details, project location, e.t.c from over 90 Ministries, Departments and Agencies (MDAs) in Nigeria at the federal level. Information uploaded on the portal is obtained through freedom of information requests sent to these MDAs in line with the Freedom of Information Act (2011). We make over 300 FOI requests yearly and update the platform with information received from these requests.</p>
        </Col>
      </Row>
    </Col>
    
  )
}

export default Home