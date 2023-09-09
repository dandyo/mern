const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout } = require('../controllers/workoutController')

const Workout = require('../models/workoutModel')

const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

// Get all workouts
router.get('/:id', getWorkout)

// POST
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update
router.patch('/:id', updateWorkout)

module.exports = router