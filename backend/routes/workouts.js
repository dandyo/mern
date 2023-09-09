const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({ msg: 'Get all workouts' })
})

// Get all workouts
router.get('/:id', (req, res) => {
    res.json({ msg: 'Get single workout' })
})

// POST
router.post('/', (req, res) => {
    // req.body
    res.json({ msg: 'POST single workout' })
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'delete single workout' })
})

// update
router.patch('/:id', (req, res) => {
    res.json({ msg: 'update single workout' })
})

module.exports = router