import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getEmployees } from '../../data/employeeData';

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);
  return (
    <>
      <h2>Employees</h2>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Specialty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={`customer-${e.id}`}>
              <th scope="row">{e.id}</th>
              <td>{e.name}</td>
              <td>{e.specialty}</td>
              <td>
                <Link to={`${e.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
