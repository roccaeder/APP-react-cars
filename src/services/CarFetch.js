export const CreateCar = (data) => {
  return fetch("http://localhost:3001/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export const ShowAllCars = () => {
  return fetch("http://localhost:3001/api/cars", {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}

export const ShowCarById = (id) => {
  return fetch(`http://localhost:3001/api/cars/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}


export const DeleteCar = (id) => {
  return fetch(`http://localhost:3001/api/cars/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}

export const UpdateCar = (id, data) => {
  return fetch(`http://localhost:3001/api/cars/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}