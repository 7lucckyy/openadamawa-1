import React from 'react'
import {Row, Col, Table, ButtonGroup, Form, Button} from 'react-bootstrap';

import TableBody from './TableBody';
import Pagination from './Pagination'

const TableComponent = ({ queries, projects}) => {
    const [searchText, setSearchText] = React.useState("")
    const [filteredProjects, setFilteredProjects] = React.useState()
    
    const searchHandler = (event) => {
        setSearchText(event.target.value)
        setFilteredProjects(projects.filter(project => project.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }
    const filterHandler = () => {
        if(Object.values(queries).length === 0) return projects
        return projects.filter(project => 
            ((project.lga.includes(queries.lga)) && (project.mda.includes(queries.mda)) && 
            (project.contractor.includes(queries.contractor))) || (project.year === +queries.year))
    }

    React.useEffect(()=> {
        setFilteredProjects(filterHandler())
    },[projects, queries])
        
    
    const [activePage, setActivePage] = React.useState(1)
    const projectsPerPage = 2
    const count = filteredProjects?.length
    const totalPages = Math.ceil(count / projectsPerPage)
    const calculatedProjects = filteredProjects?.slice((activePage - 1) * projectsPerPage, activePage * projectsPerPage)

    return (
        <Row className="mt-5 border p-5">
            <Row>
                <Col xs={12} className="w-25 mx-auto">
                    <h3 className='border-2 border-bottom text-center'>Table Data</h3>
                </Col>
            </Row>
            <Row className="d-flex justify-content-between my-3">
                <Col xs={12} lg={6} className="mb-3">
                    <ButtonGroup className="shadow">
                        <Button variant="info">Download CSV</Button>
                        <Button variant="info">PDF</Button>
                    </ButtonGroup>
                </Col>
                <Col xs={12} lg={4}>
                    <Form.Group className="" controlId="formBasicMDA">
                            <Form.Control placeholder="Search..." name="search" type="search" value={searchText} onChange={searchHandler}/>
                    </Form.Group>
                </Col>
            </Row>
            <Table striped bordered hover size="sm" responsive="lg" className="mt-2">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Year</th>
                    <th>Contractor</th>
                    <th>Budgeted Amount</th>
                    <th>Contrcated Amount</th>
                    <th>MDA</th>
                    </tr>
                </thead>
                <TableBody projects={calculatedProjects}/>
            </Table>
            <Pagination
                activePage={activePage}
                count={count}
                rowsPerPage={projectsPerPage}
                totalPages={totalPages}
                setActivePage={setActivePage}
            />
        </Row>
    )
}

export default TableComponent