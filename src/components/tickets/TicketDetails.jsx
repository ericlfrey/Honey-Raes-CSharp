import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getServiceTicket } from '../../data/serviceTicketsData';

export default function TicketDetails() {
  const { id } = useParams();
  console.log(typeof id);

  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getServiceTicket(id).then(t => setTicket(t));
  }, []);

  if (!ticket) {
    return null;
  }

  return (
    <>
      <h2>Ticket #{ticket.id}</h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Customer</th>
            <td>{ticket.customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>{ticket.description}</td>
          </tr>
          <tr>
            <th scope="row">Emergency</th>
            <td>{ticket.emergency ? 'yes' : 'no'}</td>
          </tr>
          <tr>
            <th scope="row">Employee</th>
            <td>{ticket.employee?.name || 'Unassigned'}</td>
          </tr>
          <tr>
            <th scope="row">Completed?</th>
            <td>{ticket.dateCompleted?.split('T')[0] || 'Incomplete'}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
