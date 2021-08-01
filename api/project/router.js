const router = require('express').Router();
const Model = require('./model');

router.post('/', (req, res, next) => {
    const newProject = req.body;
    Model.createProject(newProject)
        .then(newPost => {
            if (newPost.project_completed === 0) {
                newPost.project_completed = false;
                res.status(201).json(newPost)
            }else {
                newPost.project_completed = true;
                res.status(201).json(newPost)
            }
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Model.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => next(err))
});

module.exports = router;
