import React from 'react'
import { Row, Col } from "react-bootstrap"

import {ReactComponent as BusinessAnalytics} from '../assets/svg/undraw_business_analytics_re_tfh3.svg'
import {ReactComponent as ProjectTeam} from '../assets/svg/undraw_project_team_lc5a.svg'
import {ReactComponent as TeamWork} from '../assets/svg/undraw_teamwork_hpdk.svg'
import {ReactComponent as Projections} from '../assets/svg/undraw_projections_re_ulc6.svg'

function Home() {
  React.useEffect(()=> {
    document.title = "Home | FollowTaxes"
  }, [])
  return (
    <Col className="overflow-hidden">
      <Col className="bg-granny-smith-appple bg-viridian-green shadow-lg text-white h-100">
        <div className="w-75 mx-auto text-center">
          <h2 className="pt-5 text-white fs-1 fw-bold">Open Contracting and Procurement data for Ganye, Yola North and Minchika LGAs of Adamawa State.</h2>
          <p className="py-5">Under the USAID Nigeria State Accountability, Transparency, and Effectiveness (State2State) Activity, Transparency and Accountability in Totality Initiative - The parent Organization of FollowTaxes and ShinKunSheda? secured a grant to implement a project on Strengthening Citizens’ Participation and Social Accountability in Revenue Generation, Budgeting, and Procurement Monitoring in Adamawa State.</p>
        </div>
      </Col>
      <Row className="mt-5 px-3 px-md-5">
        <Col xs={12} lg={6}>
          <p className="fs-2 fw-bold">About the Project</p>
          <p className="fs-4" style={{textAlign: "justify"}}>The project understands the existing gaps in collating and recognizing citizens’ inputs in budgets, the awareness of citizens on budget monitoring despite the existence of open contracting data portals, and poor knowledge of the importance of paying fair amounts of taxes. The project focuses on the development objective of strengthening citizens’ participation and social accountability in fiscal transparency, procurement, and IGR monitoring in Adamawa State. The project builds the capacity and supports state and non-state actors. The project assesses where the target locations are left behind, strengthens where it is weak, and institutionalizes where it is strong using the principles of inclusivity, co-creation, transparency, accountability, and effectiveness in Public Finance Management (PFM). The project will give a particular emphasis to nominating budget and monitoring projects that will translate to improved delivery of public services in basic education, primary health care, and water, sanitation, and hygiene [WASH].</p>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          {/* <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/> */}
          <BusinessAnalytics/>
        </Col>
      </Row>
      <Row className="d-flex mt-5 px-3 px-md-5">
        <Col xs={12} lg={6} className="order-last order-lg-first d-flex justify-content-center align-items-center">
          {/* <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/> */}
          <ProjectTeam/>
        </Col>
        <Col xs={12} lg={6} className="order-first order-lg-last">
          <p className="fs-4" style={{textAlign: "justify"}}>The project focuses on 3 LGAs. One in each state senatorial zone - Michika in the Northern Senatorial Zone, Ganye in the Southern Senatorial Zone, and Yola North in the Central Senatorial Zone of Adamawa State. The project works with the communities to build their capacities to prioritize their needs on budget lines that will improve service delivery, identify these projects from the budgets, and monitor them to implementation through the open contracting data. The project also works with the state’s Open Government Partnership Structure by keying and promoting the two thematic areas of fiscal transparency and citizen engagement. The selected local governments are built to serve as models and learning grounds for replication across the other local governments.</p>
        </Col>
      </Row>
      <Row className="mt-5 px-3 px-md-5">
        <Col xs={12} lg={6}>
          <p className="fs-4" style={{textAlign: "justify"}}>The project is a hybrid with two components that support both government and citizens. With governments, the project provides technical assistance to participating government parastatals to co-build and sustain citizens engagement initiatives that stand in for improved service delivery in basic education, primary health care, and water, sanitation, and hygiene [WASH] in the most transparent, accountable and inclusive (youth, women, and persons with disabilities) way, with focus on fiscal planning, budget preparation and approval, procurement award and implementation and evaluation—processes that build stronger revenue generation, budgeting and procurement systems. While with citizens, the project shall utilize already existing platforms like community leaders, civil society networks, youth, women, and PWD groups while utilizing global initiatives like the Open Government Partnership (OGP) to build their capacity and awareness to ensure sustainability.</p>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          {/* <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/> */}
          <TeamWork/>
        </Col>
      </Row>
      <Row className="d-flex mt-5 px-3 px-md-5">
        <Col xs={12} lg={6} className="order-last order-lg-first d-flex justify-content-center align-items-center">
          {/* <img src={process.env.PUBLIC_URL+"logo192.png"} className="w-50" alt="Openadamwa 1"/> */}
          <Projections className="w-100 h-100"/>
        </Col>
        <Col xs={12} lg={6} className="order-first order-lg-last">
          <p className="fs-4" style={{textAlign: "justify"}}>To further enhance Gender Equality and Social Inclusion (GESI). The project utilizes local radio programs to reach out to women, people living with disabilities, and people living in hard-to-reach communities for robust inclusion. The project uses the ‘ShinKunSheda - a podcast, to disseminate credible governance financial information like budget procurement information, sector performance, IGR analysis, and other public financial management data. Throughout the project, the team shall bring in their wealth of experience in promoting the principle of co-creation to deliver the support ensuring sustainability after the project span. It shall also adopt a smart effort to create lifelong localized solutions to local problems and ensure broad-based impact, aligning with the DAI - USAID goals.</p>
        </Col>
      </Row>
    </Col>
    
  )
}

export default Home