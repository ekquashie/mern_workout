import React, { FC, useEffect } from 'react'
import { useWorkoutContext } from '../context/workout-context'
import WorkoutDetails from '../components/workout-details'
import WorkoutForm from '../components/workout-form'

const Home:FC = () => {
  const { loading, getWorkouts, workouts, createWorkout } = useWorkoutContext()

  useEffect(() => {
    if(!loading)
      getWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout?._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm loading={loading} createWorkout={createWorkout}/>
    </div>
  )
}

export default Home