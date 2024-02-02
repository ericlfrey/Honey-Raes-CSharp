import React from 'react';
import { useParams } from 'react-router-dom';

export default function AssignEmployee() {
  const { id } = useParams();
  return (
    <>
      <h2>Assign Employee to ticket {id}</h2>
    </>
  );
}
