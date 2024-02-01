import { useEffect } from 'react';
import { useState } from 'react';
import { getCustomers } from '../../data/customerData';
import { createServiceTicket } from '../../data/serviceTicketsData';
import { useNavigate } from 'react-router-dom';

export default function CreateTicket() {
  const initialState = { description: '', emergency: false, customerId: '' };
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCustomers().then(setCustomers);
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
    const payload = {
      ...formInput,
      customerId: Number(formInput.customerId),
    };
    createServiceTicket(payload).then(() => navigate('/tickets'));
  };

  return (
    <>
      <h2>Add a New Service Ticket</h2>
      <form
        className="d-flex flex-column align-items-start ticket-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="customerSelect">Select Customer</label>
        <select
          name="customerId"
          id="customerSelect"
          onChange={handleChange}
          value={formInput.customerId}
          required
        >
          <option value="" style={{ display: 'none' }}>
            Choose Customer
          </option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <label htmlFor="descriptionInput">Description</label>
        <textarea
          rows="5"
          cols="30"
          id="descriptionInput"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="emergencyInput">Emergency?</label>
        <input
          type="checkbox"
          id="emergencyInput"
          name="emergency"
          checked={formInput.emergency}
          onChange={e => {
            setFormInput(prevState => ({
              ...prevState,
              emergency: e.target.checked,
            }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
