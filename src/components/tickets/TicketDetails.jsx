import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { getServiceTicket } from '../../data/serviceTicketsData';

export default function TicketDetails() {
  const [ticket, setTicket] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
            <td>
              {ticket.employee?.name || (
                <Button
                  className="btn-sm"
                  onClick={() => {
                    navigate('/employees/assign', { relative: 'path' });
                  }}
                >
                  Assign
                </Button>
              )}
            </td>
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
