import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

import { BarChart, CircleChart, LineChart, AreaChart } from './Charts';
// import Dropdown from './ChartMenuDropdown';
import Dropdown from './Dropdown';

export const BarChartWidget = (props) => {
  const { title, labels = [], series=[] } = props;
  
  return (
    <Card border="light" className="shadow">
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0 border-bottom">
        <div className="d-block">
          <p className="fw-normal text-gray mb-2">{title}</p>
        </div>
        <div>
          <Dropdown/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <BarChart title={title} labels={labels} series={series}/>
      </Card.Body>
    </Card>
  );
};


export const PieChartWidget = (props) => {
  const { title, labels = [], series = [], data = [] } = props;
  const colors = data.map(d => d.chartColor);

  return (
    <Card border="light" className="shadow">
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0 border-bottom">
        <div className="d-block">
          <p className="fw-normal text-gray mb-2">{title}</p>
        </div>
        <div>
          <Dropdown/>
        </div>
      </Card.Header>
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} labels={labels} colors={colors}/>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>
            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <d.icon className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {`${d.label} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export const LineChartWidget = (props) => {
  const { title, value, labels, series } = props;
  return (
    <Card className="shadow">
      {/* //bg-secondary-alt */}
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>{value}</h3>
        </div>
        <div>
          <Dropdown/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <LineChart labels={labels} series={series} title={title}/>
      </Card.Body>
    </Card>
  );
};

export const AreaChartWidget = (props) => {
  const { title, value, labels, series } = props;
  return (
    <Card className="shadow">
      {/* //bg-secondary-alt */}
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>{value}</h3>
        </div>
        <div>
          <Dropdown/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <AreaChart labels={labels} series={series} title={title}/>
      </Card.Body>
    </Card>
  );
};