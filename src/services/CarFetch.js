export const CreateCarFetch = (data) => {
  return fetch("http://localhost:3001/cars", {
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

export const ShowAllCarsFetch = () => {
  fetch("http://localhost:3001/cars", {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err);
    });
}