import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import {
  deleteServiceTicket,
  getServiceTickets,
} from '../../data/serviceTicketsData';
import { Link } from 'react-router-dom';

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const getAllServiceTickets = () => {
    getServiceTickets().then(setTickets);
  };

  useEffect(() => {
    getAllServiceTickets();
  }, []);

  const handleDelete = id => {
    deleteServiceTicket(id).then(() => getAllServiceTickets());
  };

  const handleComplete = id => {
    console.log(id);
  };

  return (
    <>
      <h2>Service Tickets</h2>
      <Link to="/tickets/create">Add</Link>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Emergency?</th>
            <th>Date Completed</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(t => (
            <tr key={`ticket-${t.id}`}>
              <th scope="row">{t.id}</th>
              <td>{t.description}</td>
              <td>{t.emergency ? 'yes' : 'no'}</td>
              <td>
                {t.dateCompleted
                  ? new Date(t.dateCompleted).toLocaleDateString()
                  : 'Incomplete'}
              </td>
              <td>
                <Link to={`${t.id}`}>Details</Link>
              </td>
              <td>
                <Link onClick={() => handleDelete(t.id)}>Delete</Link>
              </td>
              <td>
                {!t.dateCompleted && t.employeeId ? (
                  <Link onClick={() => handleComplete(t.id)}>Complete</Link>
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
