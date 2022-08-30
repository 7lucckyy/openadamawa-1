import React from 'react'
import { Col, Row, Card} from 'react-bootstrap'
import { FaCog, FaBriefcase, FaMoneyBill } from 'react-icons/fa'

import CountUpAnimation from "./Counter"


const Summary = ({ totalNumberOfProjects, totalContract, highestContract, lowestContract }) => {
  return (
        <Col lg={8} className="ms-lg-auto">
            <Row>
            <Col xs={12} lg={6} className="mb-3">
                <Card className="text-center shadow rounded border-0 bg-pacific-blue" bg="">
                <Card.Body>
                    <div className='p-4 text-white d-flex justify-content-between align-items-center'>
                        <FaCog size={"60"} className='text-danger text-white'/>
                        <h3>
                            <CountUpAnimation duration={1000}>{totalNumberOfProjects}</CountUpAnimation>
                        </h3>
                    </div>
                </Card.Body>
                <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">Total number of projects</Card.Footer>
                </Card>
            </Col>      
            <Col xs={12} lg={6} className="mb-3">
                <Card className="text-center shadow rounded border-0 bg-green2" bg="">
                <Card.Body>
                    <div className='p-4 text-white d-flex justify-content-between align-items-center'>
                        <FaMoneyBill size={"60"} className='text-danger text-white'/>
                        <h3>
                            <span className='me-1 text-decoration-line-through fw-bolder'>N</span>
                            <CountUpAnimation duration={1000}>{totalContract}</CountUpAnimation>
                        </h3>
                    </div>
                </Card.Body>
                <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">Total contract sum</Card.Footer>
                </Card>
            </Col>          
            <Col xs={12} lg={6} className="mb-3">
                <Card className="text-center shadow rounded border-0 bg-granny-smith-apple" bg="">
                <Card.Body>
                    <div className='p-4 text-white d-flex justify-content-between align-items-center'>
                        <FaBriefcase size={"60"} className='text-danger text-white'/>
                        <h3>
                            <span className='me-1 text-decoration-line-through fw-bolder'>N</span>
                            <CountUpAnimation duration={1000}>{highestContract}</CountUpAnimation>
                        </h3>
                    </div>
                </Card.Body>
                <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">Highest contract amount</Card.Footer>
                </Card>
            </Col>      
            <Col xs={12} lg={6} className="mb-3">
                <Card className="text-center shadow rounded border-0 bg-viridian-green" bg="">
                    <Card.Body>
                        <div className='p-4 text-white d-flex justify-content-between align-items-center'>
                            <FaBriefcase size={"60"} className='text-danger text-white'/>
                            <h3>
                                <span className='me-1 text-decoration-line-through fw-bolder'>N</span>
                                <CountUpAnimation duration={1000}>{lowestContract}</CountUpAnimation>
                            </h3>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">Lowest contract amount</Card.Footer>
                </Card>
            </Col> 
            </Row>
        </Col>        
  )
}

export default Summary