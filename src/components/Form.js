import React from 'react'
import {Container, Col, Row, Form} from 'react-bootstrap'

import { parseLGAName, parseMDAName, parseContractorName } from '../utils/parseProjectData'
import axiosInstance from '../utils/axiosInstance'

const FormContainer = ({setQuery}) => {
  const [mdas, setMDAs] = React.useState()
  const [lgas, setLGAs] = React.useState()
  const [contractors, setContractors] = React.useState()
  const [searchParams, setSearchParams] = React.useState({})

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.type==="checkbox" ? event.target.checked : event.target.value
    setSearchParams({...searchParams, [name]: value})
    setQuery({...searchParams, [name]: value})
  }

  React.useEffect(()=> {
      axiosInstance.get("/mdas").then(({data}) => setMDAs(parseMDAName(data.data)))
      axiosInstance.get("/lgas").then(({data}) => setLGAs(parseLGAName(data.data)))
      axiosInstance.get("/contractors").then(({data}) => setContractors(parseContractorName(data.data)))
    },[])
  
  return (
    <>
    <Container>
      <Row>
        <Col className='border border-1'>
        <Form>
          <header className='mx-auto py-3 mt-3'>Find Projects</header>
            <Form.Group className="mb-3" controlId="formBasicMDA">
              <Form.Label>MDA</Form.Label>
              <Form.Select className="bg-gray" disabled={!mdas} placeholder="Enter MDA" name="mda" value={searchParams?.["mda"] ?? ""} onChange={handleChange}>
                <option value={""}>{mdas ? "Select MDA": "Loading.."}</option>
                {mdas?.map(mda => (
                  <option key={mda.id} value={mda.name}>{mda.name}</option>
                ))}
              </Form.Select>  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>LGA</Form.Label>
              <Form.Select className="bg-gray" disabled={!lgas} name="lga" value={searchParams?.["lga"] ?? ""} onChange={handleChange}>
              <option value={""}>{lgas ? "Select LGA": "Loading.."}</option>
                {lgas?.map(lga => (
                  <option key={lga.id} value={lga.name}>{lga.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contractor</Form.Label>
              <Form.Select className="bg-gray" disabled={!contractors} name="contractor" value={searchParams?.["contractor"] ?? ""} onChange={handleChange}>
              <option value={""}>{contractors ? "Select Contractor": "Loading.."}</option>
                {contractors?.map(contractor => (
                  <option key={contractor.id} value={contractor.name}>{contractor.name}</option>
                ))}
              </Form.Select>
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year</Form.Label>
              <Form.Control className="bg-gray" disabled={!mdas} placeholder="Enter Year" name="year" value={searchParams?.["year"] ?? ""} onChange={handleChange}/>
            </Form.Group>
            
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Is Monitored" name="isMonitored" checked={searchParams?.["isMonitored"] ?? ""} onChange={handleChange}/>
            </Form.Group> */}
            {/* <Button variant="primary" type="submit" className='mb-3 text-center'>
              Find
            </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default FormContainer