import { useWorkoutContext } from '../context/workout-context'
import { Types } from '../types/types'

const WorkoutDetails = ({ workout } : { workout: Types.Workout }) => {
  const { deleteWorkout } = useWorkoutContext()
  const handleClick = async () => {
    deleteWorkout(workout?._id)
  }

  return (
    <div className="workout-details">
      <h4>{workout?.title}</h4>
      <p><strong>Load (kg): {workout?.load}</strong></p>
      <p><strong>Reps (kg): {workout?.reps}</strong></p>
      <p>{workout?.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails