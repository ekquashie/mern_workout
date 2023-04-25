export declare namespace Types {
  export interface Workout {
    _id: string;
     title: string;
     reps: number;
     load: number;
     createdAt: string;
     updatedAt: string;
     __v: number;
  }

  export interface CreateWorkout {
    title: string;
    load: number;
    reps: number;
  }
}