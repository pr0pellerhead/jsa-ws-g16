const mongoose = require('mongoose');

const Posts = mongoose.model(
    'posts',
    {
        user_id: String,
        title: String,
        content: String
    },
    'posts'
);

// id -> post id
// user_id -> user id
// data -> post data {_id, user_id, title, content}

const getAll = async (user_id) => {

};

const getSingle = async (user_id, id) => {

};

const create = async (data) => {

};

const update = async (id, data) => {

};

const remove = async (id) => {

};

module.exports = {
    getAll,
    getSingle,
    create,
    update,
    remove
};