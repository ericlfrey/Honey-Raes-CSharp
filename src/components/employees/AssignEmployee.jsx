import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployees } from '../../data/employeeData';
import { Button } from 'reactstrap';
import {
  getServiceTicket,
  updateServiceTicket,
} from '../../data/serviceTicketsData';

export default function AssignEmployee() {
  const [employees, setEmployees] = useState([]);
  const [ticket, setTicket] = useState({});
  const [formInput, setFormInput] = useState({ employeeId: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEmployees().then(setEmployees);
    getServiceTicket(id).then(setTicket);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { id, customerId, description, emergency, dateCompleted } = ticket;
    const payload = {
      id,
      customerId,
      description,
      emergency,
      dateCompleted,
      employeeId: Number(formInput.employeeId),
    };
    updateServiceTicket(payload).then(() => navigate(`/tickets/${id}`));
  };

  return (
    <>
      <h2>Assign Employee to ticket {id}</h2>
      <form
        className="assign-employee-form d-flex flex-column align-items-start"
        onSubmit={handleSubmit}
      >
        <label htmlFor="employeeSelect">Select Employee</label>
        <select
          name="employeeId"
          id="employeeSelect"
          onChange={handleChange}
          value={formInput.employeeId}
          required
        >
          <option value="" style={{ display: 'none' }}>
            Choose Employee
          </option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
        <Button>Sumbit</Button>
      </form>
    </>
  );
}
