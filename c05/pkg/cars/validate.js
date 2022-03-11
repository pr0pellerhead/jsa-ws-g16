const { Validator } = require('node-input-validator');

const Car = {
    model: 'required|string',
    manufacturer: 'required|string',
    year: 'required|integer'
};

const CarPartial = {
    model: 'string',
    manufacturer: 'string',
    year: 'integer'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema); // this is where the validation is set up
    let e = await v.check(); // this is where the validation hapens
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    Car, 
    CarPartial,
    validate
};