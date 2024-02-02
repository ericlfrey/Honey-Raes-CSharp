const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => new Promise((resolve, reject) => {
  fetch(_apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export const getServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

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

export const updateServiceTicket = (payload) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export const deleteServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        reject(`Failed to delete service ticket. Status: ${response.status}`);
      }
    })
    .catch(reject);
});

export const completeServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/${id}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        reject(`Failed to complete service ticket. Status: ${response.status}`);
      }
    })
    .catch(reject);
});
