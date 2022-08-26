import React from 'react'

function TableBody({projects}) {
  return (
    <tbody>
        {projects?.map(project=> (
            <tr key={project.id}>
            <td>{project.title}</td>
            <td>{project.lga}</td>
            <td>{project.year}</td>
            <td>{project.contractor}</td>
            <td>{project.budgetAmount}</td>
            <td>{project.contractedAmount}</td>
            <td>{project.mda}</td>
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody