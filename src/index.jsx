import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketsList from './components/tickets/TicketsList';
import TicketDetails from './components/tickets/TicketDetails';
import CreateTicket from './components/tickets/CreateTicket';
import CustomersList from './components/customers/CustomersList';
import CustomerDetails from './components/customers/CustomerDetails';
import CreateCustomer from './components/customers/CreateCustomer';
import EmployeesList from './components/employees/EmployeesList';
import EmployeeDetails from './components/employees/EmployeeDetails';
import CreateEmployee from './components/employees/CreateEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tickets" element={<TicketsList />} />
        <Route path="tickets/:id" element={<TicketDetails />} />
        <Route path="tickets/create" element={<CreateTicket />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="customers/:id" element={<CustomerDetails />} />
        <Route path="customers/create" element={<CreateCustomer />} />
        <Route path="employees" element={<EmployeesList />} />
        <Route path="employees/:id" element={<EmployeeDetails />} />
        <Route path="employees/create" element={<CreateEmployee />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
