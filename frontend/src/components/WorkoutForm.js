import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch(process.env.URL + '/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="col workout-form">
            <form onSubmit={handleSubmit}>
                <h3>Add new workout</h3>

                <div className="mb-4">
                    <label>Title:</label>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className={`form-control ${emptyFields.includes('title') ? 'error' : ''}`}
                    />
                </div>

                <div className="mb-4">
                    <label>Load:</label>
                    <input
                        type='number'
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                        className={`form-control ${emptyFields.includes('load') ? 'error' : ''}`}
                    />
                </div>

                <div className="mb-4">
                    <label>Reps:</label>
                    <input
                        type='number'
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                        className={`form-control ${emptyFields.includes('reps') ? 'error' : ''}`}
                    />
                </div>

                <button type="submit" className="btn mb-4">Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm