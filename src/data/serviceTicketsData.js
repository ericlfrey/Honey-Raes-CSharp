const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getServiceTicket = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};
//export a function here that gets a ticket by id
