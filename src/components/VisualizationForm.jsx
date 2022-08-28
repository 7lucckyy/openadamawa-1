import React from 'react'
import { Row, Form, Col } from "react-bootstrap"

function VisualizationForm({ optionsHandler }) {
    const [criteria, setCriteria] = React.useState("year")
    const [chartType, setChartType] = React.useState("bar")

    React.useEffect(()=> {
        optionsHandler({ criteria, chartType })
    }, [criteria, chartType])
    
    return (
        <>
            <Row className="py-5">
                <Col xs={12} lg={6} className="border border-1 p-lg-5 text-lg-center">
                    <Row>
                        <Col xs={12} lg={6}>
                            <Form.Group className="">
                                <Form.Label>MDA</Form.Label>
                                <Form.Select>

                                </Form.Select>
                            </Form.Group>
                        
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form.Group className="">
                                <Form.Label>State</Form.Label>
                                <Form.Select>

                                </Form.Select>
                            </Form.Group>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Form.Group className="">
                                <Form.Label>Contractor</Form.Label>
                                <Form.Select>

                                </Form.Select>
                            </Form.Group>
                        
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form.Group className="">
                                <Form.Label>Year</Form.Label>
                                <Form.Select>

                                </Form.Select>
                            </Form.Group>
                        
                        </Col>
                    </Row>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className="fw-bold text-lg-center">
                <Col>
                    <Form.Group>
                        <Form.Label>Criteria</Form.Label>
                        <Form.Select className="rounded-3" value={criteria} onChange={(event)=> setCriteria(event.target.value)}>
                            <option value="year">Year</option>
                            <option value="lga">LGA</option>
                            <option value="mda">MDA</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Chart Type</Form.Label>
                        <Form.Select className="rounded-3" value={chartType} onChange={(event)=> setChartType(event.target.value)}>
                            <option value="bar">Bar</option>
                            <option value="line">Line</option>
                            <option value="area">Area</option>
                            <option value="pie">Pie</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default VisualizationForm