const router = require('express').Router();

router.get('/todos', (req, res) => {
    const db = require('../db').getDb();
    db
    .collection('todos')
    .find({})
    .toArray((err, result) => {
        if(err) res.status(400).send('Error fetching todos');
        else res.json(result);
    })
})

router.post('/', (req, res) => {
    const db = require('../db').getDb();
    const body = req.body;
    db
    .collection('todos')
    .insertOne(body, (err, result) => {
        if(err) res.status(400).send('Error inserting todo');
        else res.json({
            msg: 'Inserted successfully'
        });
    });
});

module.exports = router;