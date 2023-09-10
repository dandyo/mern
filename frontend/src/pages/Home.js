import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    // const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                // setWorkouts(json)
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="container">
            <div className="home row">
                <div className="col workouts">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home