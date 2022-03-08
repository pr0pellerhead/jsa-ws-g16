const cars = require('../pkg/cars');
const carsMongo = require('../pkg/cars/mongo');

const getAll = async (req, res) => {
    try {
        let cs = await carsMongo.getAllCars();
        return res.status(200).send(cs);
    } catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let cs = await carsMongo.getOne(req.params.id);
        return res.status(200).send(cs);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        let c = await carsMongo.addCar(req.body);
        return res.status(201).send(c);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await carsMongo.updateCar(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        await carsMongo.updateCar(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        await carsMongo.removeCar(req.params.id);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
};