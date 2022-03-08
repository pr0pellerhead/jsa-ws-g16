require('./pkg/db');

const express = require('express');
const cars = require('./handlers/cars');

const api = express();

api.use(express.json());

api.get('/api/cars', cars.getAll);
api.get('/api/cars/:id', cars.getOne);
api.post('/api/cars', cars.create);
api.put('/api/cars/:id', cars.update);
api.patch('/api/cars/:id', cars.updatePartial);
api.delete('/api/cars/:id', cars.remove);

api.listen(10000, err => {
    if(err) return console.log(err);
    return console.log('Server started on port 10000');
});

// REST API

// POST - create data record
// GET - retrieve data record
// PUT - update whole data record
// PATCH - partial update of data record
// DELETE - delete a data record

// {
//     first_name: "Pero",
//     last_name: "Perovski",
//     age: 62,
//     location: {
//         city: "Skopje",
//         country: "Macedonia"
//     }
// }

// *users* is a data resource
// GET /api/users - list all users [200, 500]
// GET /api/users/:id - get data fro user with id = :id [200, 404, 500] 
// POST /api/users - add/create user (only one) [201, 400, 500]
// PUT /api/users/:id - update user with id = :id [200, 400, 404, 500]
// PATCH /api/users/:id - partial update user with id = :id [200, 400, 404, 500]
// DELETE /api/users/:id - delete user with id = :id [204, 400, 404, 500]

// user subresources
// GET /api/users/:id/location - get the location for user with id = :id
// PUT /api/users/:id/location
// PATCH /api/users/:id/location

// 2** success (200 - ok, 201 - created, 204 - no content)
// 3** redirect
// 4** application error
// 5** server error


// ... spread operator
// used for destructuring

// let a = {
//     ime: 'pero',
//     prezime: 'perovski'
// };

// let c = {
//     vozrast: 34
// };

// let d = {
//     ime: 'janko'
// };

// let b = {...a, ...c, ...d};

// u = {...u, ...user};

// {
//     ime: 'pero',
//     prezime: 'perovski',
//     vozrast: 34,
//     ime: 'janko'
// }





