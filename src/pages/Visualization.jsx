import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

import VisualizationForm from '../components/VisualizationForm'
import { BarChartWidget, LineChartWidget, PieChartWidget, AreaChartWidget } from '../components/Widgets'
import { extractLGAData, extractMDAData, extractYearData } from '../utils/parseProjectData'
import { ProjectsContext } from '../_contexts/ProjectsContext';
// import projectsData from '../data/projects'


function Visualization() {
    // const [projects, setProjects] = React.useState([])
    const { projects } = React.useContext(ProjectsContext)
    const [options, setOptions] = React.useState()
    const [totalProjects, setTotalProjects] = React.useState()
    const [contractSum, setContractSum] = React.useState()
    
    React.useEffect(()=> {
        const {yearTotalProjects, yearContractSum} = extractYearData(projects)
        setTotalProjects(yearTotalProjects)
        setContractSum(yearContractSum)
    }, [projects])
    
    // React.useEffect(()=> {
    //     axiosInstance.get("/projects").then(({data}) => {
    //         const formattedPeojects = parseProjectData(data.data)
    //         setProjects(formattedPeojects)
    //         const {yearTotalProjects, yearContractSum} = extractYearData(formattedPeojects)
    //         setTotalProjects(yearTotalProjects)
    //         setContractSum(yearContractSum)
    //     }).catch((err) => err.response)
    //     const formattedPeojects = parseProjectData(projectsData.data)
    //     setProjects(formattedPeojects)
    //     const {yearTotalProjects, yearContractSum} = extractYearData(formattedPeojects)
    //     setTotalProjects(yearTotalProjects)
    //     setContractSum(yearContractSum)
    // }, [])
    

    const filterHandler = (options) => {
        switch (options?.criteria) {
            case "year":
                const {yearTotalProjects, yearContractSum} = extractYearData(projects)
                setTotalProjects(yearTotalProjects)
                setContractSum(yearContractSum)
                setOptions(options)
                break;
            case "lga":
                const {lgaTotalProjects, lgaContractSum} = extractLGAData(projects)
                setTotalProjects(lgaTotalProjects)
                setContractSum(lgaContractSum)
                setOptions(options)
                break;
            case "mda":
                const {mdaTotalProjects, mdaContractSum} = extractMDAData(projects)
                setTotalProjects(mdaTotalProjects)
                setContractSum(mdaContractSum)
                setOptions(options)
                break;
            default:
                break;
        }
    }
    return (
        <Container className="">
            <VisualizationForm optionsHandler={filterHandler}/>
            <Row className="mt-5 d-lg-flex justify-content-between">
                <Col lg={6} className="mb-4 mb-lg-0">
                    {options?.chartType === "bar" ? <BarChartWidget title="Number of projects by Procurement method" {...totalProjects}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title="Number of projects by Procurement method" {...totalProjects}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget {...totalProjects}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget {...totalProjects}/>: null}
                </Col>
                <Col lg={6}>
                    {options?.chartType === "bar" ? <BarChartWidget title="Contract Sum of projects by Procurement method" {...contractSum}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title="Contract Sum of projects by Procurement method" {...contractSum}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget {...contractSum}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget {...contractSum}/>: null}
                </Col>
            </Row>
        </Container>
    )
}

export default Visualization