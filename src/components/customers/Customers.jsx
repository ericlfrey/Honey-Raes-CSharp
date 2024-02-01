import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Customers() {
  return (
    <>
      <h2>Customers</h2>
      <Link to="/customers/create">Add</Link>
      <Outlet />
    </>
  );
}
