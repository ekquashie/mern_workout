import React, { createContext, useContext, useState } from 'react'
import { request } from './requests/request'
import { ENDPOINTS } from '../constants/endpoints'
import { Types } from '../types/types'

interface WorkoutContextValue {
  loading: boolean;
  workouts: Types.Workout[];
  getWorkouts: () => Promise<any>;
  createWorkout: (data: Types.CreateWorkout) => Promise<any>;
  deleteWorkout: (id: string) => Promise<any>;
  updateWorkout: (id: string, data: object) => Promise<any>;
}

const WorkoutContext = createContext<WorkoutContextValue>({
  loading: false,
  workouts: [],
  getWorkouts: () => Promise.resolve(),
  createWorkout: () => Promise.resolve(),
  deleteWorkout: () => Promise.resolve(),
  updateWorkout: () => Promise.resolve(),
});

const WorkoutProvider = ({ children }: { children: React.ReactNode} ) => {
  const [loading, setLoading] = useState(false)
  const [workouts, setWorkouts] = useState<Types.Workout[]>([]);

  const getWorkouts = async () => {
    return request(
      ENDPOINTS.getWorkouts,
      "GET",
      null,
      setLoading,
    ).then((response) => {
      if(!!response && response.data && response.status === 200) {
        setWorkouts(response.data)
      }
    });
  };

  const createWorkout = async (data: Types.CreateWorkout) => {
    return request(
      ENDPOINTS.createWorkout,
      "POST",
      data,
      setLoading,
    ).then((response) => {
      if(!!response && response.status === 201 && response.data) {
        setWorkouts((prevWorkouts) => {
          return [...prevWorkouts, response.data]
        })
      }
    })
  };

  const updateWorkout = async (id: string, data: object) => {
    return request(
      `${ENDPOINTS.updateWorkout}/${id}`,
      "PATCH",
      data,
      setLoading,
    ).then((response) => {
      if(!!response && response.status === 201 && response.data) {
        setWorkouts((prevWorkouts) => {
          return [...prevWorkouts, response.data]
        })
      }
    })
  };

  const deleteWorkout = async (id: string) => {
    return request(
      `${ENDPOINTS.deleteWorkout}/${id}`,
      "DELETE",
      null,
      setLoading,
    ).then((response) => {
      if(!!response && response.status === 200 && response.data) {
        setWorkouts((prevWorkouts) => {
          return prevWorkouts.filter((workout) => {
            return workout._id !== response.data._id
          })
        })
      }
    })
  };

  return (
    <WorkoutContext.Provider value={{ loading, workouts, getWorkouts, createWorkout, deleteWorkout, updateWorkout }}>
      {children}
    </WorkoutContext.Provider>)
}

export const useWorkoutContext = () => useContext(WorkoutContext);
export default WorkoutProvider