import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITask } from "../features/tasks/types";


const baseUrl ='http://localhost:3003/tasks'

export const getAllTasks = createAsyncThunk('tasks/all', async()=>{
    const response = axios.get(baseUrl)
    return (await response).data

})

export const addTask = createAsyncThunk('tasks/add', async (taskData: { text: string; status: string }) => {
    const response = await axios.post(baseUrl, taskData);
    return response.data;
})

export const deleteTask =  createAsyncThunk('tasks/delete', async (id:string)=>{
    const response= await axios.delete(baseUrl+"/"+id)
    return response.data
})


export const updateTask = createAsyncThunk('tasks/update', async (task:ITask) => {
    const response = await axios.put(`${baseUrl}/${task.id}`, task);
    return response.data; 
  });