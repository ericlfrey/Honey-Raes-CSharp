const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getServiceTicket = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createServiceTicket = (payload) => new Promise((resolve, reject) => {
  fetch(_apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
