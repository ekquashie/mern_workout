import React, { FunctionComponent } from 'react'
import { Field, Form, Formik } from 'formik'
import { Types } from '../types/types'
import * as Yup from 'yup'

interface Props {
  loading: boolean;
  createWorkout: (data: Types.CreateWorkout) => Promise<any>
}

const WorkoutForm: FunctionComponent<Props> = ({ loading, createWorkout }) => {

  const initialValues: Types.CreateWorkout = {
    title: '',
    load: 0,
    reps: 0
  }

  const WorkoutSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    load: Yup.number().required('Load is required').min(1, 'Please enter a number greater than zero'),
    reps: Yup.number().required('Reps is required').min(1, 'Please enter a number greater than zero')
  })

  const handleSubmit = (workout: Types.CreateWorkout) => {
    createWorkout(workout)
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={WorkoutSchema}>
      {({ errors }) => {
        return (
          <Form className="create">
            <h3>Add a New Workout</h3>
            {/* Title */}
            <label>Exercise Title:</label>
            <Field
              id="title"
              name="title"
              as="input"
            />

            {/* Loads */}
            <label>Load (in kg):</label>
            <Field
              id="load"
              name="load"
              as="input"
              type="number"
            />

            {/* Reps */}
            <label>Reps:</label>
            <Field
              id="reps"
              name="reps"
              as="input"
              type="number"
            />

            <button type="submit">Add Workout</button>
            {Object.entries(errors).map((error, index) => {
              return (
                <div key={index} className="error">
                  {error[1]}
                </div>
              )
            })}
          </Form>
        )
      }}
    </Formik>
  )
}

export default WorkoutForm