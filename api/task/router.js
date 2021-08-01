const router = require('express').Router();
const Model = require('./model');

router.post('/', (req, res, next) => {
    const newTask = req.body;
    Model.createTask(newTask)
        .then(newPost => {
            if (newPost.task_completed === 0) {
                newPost.task_completed = false;
                res.status(201).json(newPost);
            }else {
                newPost.task_completed = true;
                res.status(201).json(newPost);
            }
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Model.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => next(err))
});

module.exports = router;
