import React, { createContext, useContext, useState } from 'react'
import { request } from './requests/request'
import { ENDPOINTS } from '../constants/endpoints'
import { Types } from '../types/types'

interface WorkoutContextValue {
  loading: boolean;
  workouts: Types.Workout[];
  getWorkouts: () => Promise<any>;
  createWorkout: (data: Types.CreateWorkout) => Promise<any>;
}

const WorkoutContext = createContext<WorkoutContextValue>({
  loading: false,
  workouts: [],
  getWorkouts: () => Promise.resolve(),
  createWorkout: () => Promise.resolve(),
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
  return (
    <WorkoutContext.Provider value={{ loading, workouts, getWorkouts, createWorkout }}>
      {children}
    </WorkoutContext.Provider>)
}

export const useWorkoutContext = () => useContext(WorkoutContext);
export default WorkoutProvider