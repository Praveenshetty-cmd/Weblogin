import React from 'react'
import './HomePage.css';
 
const data = [
    {
      employeeId: '1',
      name: 'Alice Smith',
      projectsWorking: 'Project A, Project B',
      knowledge: 'React, Node.js',
      certification: 'Certified React Developer',
    },
    {
      employeeId: '2',
      name: 'Bob Johnson',
      projectsWorking: 'Project C',
      knowledge: 'Angular, TypeScript',
      certification: 'Certified Angular Developer',
    },
  ];
export default function EmployessInfo() {
  return (
    <div className="container">
    <header className="header">
      <h1>Welcome to Our Community</h1>
    </header>
    <table className="table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Projects Working</th>
          <th>Knowledge</th>
          <th>Certification</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.employeeId}>
            <td>{row.employeeId}</td>
            <td>{row.name}</td>
            <td>{row.projectsWorking}</td>
            <td>{row.knowledge}</td>
            <td>{row.certification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
