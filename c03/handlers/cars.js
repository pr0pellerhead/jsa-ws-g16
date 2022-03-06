const cars = require('../pkg/cars');

const getAll = async (req, res) => {
    try {
        let cs = await cars.getAllCars();
        return res.status(200).send(cs);
    } catch(err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let cs = await cars.getOne(Number(req.params.id));
        return res.status(200).send(cs);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        await cars.addCar(req.body);
        return res.status(201).send(req.body);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await cars.updateCar(Number(req.params.id), req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    return res.status(200).send('ok');
};

const remove = async (req, res) => {
    try {
        await cars.removeCar(Number(req.params.id));
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