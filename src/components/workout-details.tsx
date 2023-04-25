import React from 'react'
import { Types } from '../types/types'

const WorkoutDetails = ({ workout } : { workout: Types.Workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout?.title}</h4>
      <p><strong>Load (kg): {workout?.load}</strong></p>
      <p><strong>Reps (kg): {workout?.reps}</strong></p>
      <p>{workout?.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails