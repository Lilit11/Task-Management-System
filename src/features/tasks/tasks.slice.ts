import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";
import { deleteTask, getAllTasks } from "../../app/tasksApi";
import { act } from "react";

const initialState:IState ={
    tasks:[]
}
const TasksSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTasks.fulfilled,(state, action)=>{
            state.tasks = action.payload
        }),
        builder.addCase(deleteTask.fulfilled,(state,action)=>{
            
            state.tasks= state.tasks.filter(task=> task.id !== action.payload.id)
        })

    },
  });
  
  
  export const taskReducer= TasksSlice.reducer