import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));



// //Con PUT para actualizar un objeto
// function putData(urlApi, dataUpdate) {
//     const response = fetch(urlApi, {
//         method: 'PUT',
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataUpdate)
//     });
//     return response;
// }

// const dataUpdate = {
//     "title": "Se puede cambiar tambien otras caracteristicas",
//     "price": 10
// }

// putData(`${API}/products/271`, dataUpdate)
//     .then(response => response.json())
//     .then(dataUpdate => console.log(dataUpdate));

// //Eliminar un objeto indicando el id con DELETE
// function deleteData(urlApi) {
//     const response = fetch(urlApi, {
//         method: 'DELETE',
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     });
//     return response;
// }

// const idNumber = 271;

// deleteData(`${API}/products/${idNumber}`)
//     .then(() => {
//         console.log(`Borrado ${idNumber}`); 
//     });