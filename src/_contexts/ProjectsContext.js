import React from 'react'

import axiosInstance from '../utils/axiosInstance'
import parseProjectData from '../utils/parseProjectData'

export const ProjectsContext = React.createContext()
ProjectsContext.displayName = "ProjectsContext"

export default function ProjectsProvider() {
    const [projects, setProjects] = React.useState([])
    const [rawProjectsData, setRawProjectData] = React.useState([])

    React.useEffect(()=> {
        axiosInstance.get("/projects").then(({data}) => {
            setProjects(parseProjectData(data.data));
            setRawProjectData(data.data)
        }, (err) => err.response)}, [])
    
    return {
        projects,
        rawProjectsData
    }
}