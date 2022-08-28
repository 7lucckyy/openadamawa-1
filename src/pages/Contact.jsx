import React from 'react'
import { Row, Col, Form } from "react-bootstrap"


function Contact() {
  return (
    <Col className="border border-3 p-5 m-5">
        <Row>
            <Col xs={12} lg={8}>
                <Form.Group className="">
                    <Form.Label>MDA</Form.Label>
                    <Form.Control>

                    </Form.Control>
                </Form.Group>
            
            </Col>
            <Col xs={12} lg={8}>
                <Form.Group className="">
                    <Form.Label>State</Form.Label>
                    <Form.Control>

                    </Form.Control>
                </Form.Group>
            
            </Col>
        </Row>
        <Row>
            <Col xs={12} lg={8}>
                <Form.Group className="">
                    <Form.Label>Contractor</Form.Label>
                    <Form.Control>

                    </Form.Control>
                </Form.Group>
            
            </Col>
            <Col xs={12} lg={8}>
                <Form.Group className="">
                    <Form.Label>Year</Form.Label>
                    <Form.Control>

                    </Form.Control>
                </Form.Group>
            
            </Col>
        </Row>
    </Col>
  )
}

export default Contact