const db = require('../../data/dbConfig');

module.exports = {
    createTask,
    getTasks,
};

async function createTask(post) {
    const [id] = await db('tasks').insert(post);
    return db('tasks').where({ "task_id": id }).first();
}

function getTasks() {
    return db('tasks');
}
