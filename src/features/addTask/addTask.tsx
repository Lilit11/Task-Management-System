import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { addTask } from "../../app/tasksApi";
import styles from './addTask.module.css'
import { useNavigate } from "react-router-dom";

interface FormData {
    text: string;
    status: string;
    date: string; 
  }
  
export  const AddTask: React.FC = () => {

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()
    const onSubmit = (data: FormData) => {
      const currentDate = new Date().toISOString(); 
      const taskData = { ...data, date: currentDate }; 
      dispatch(addTask(taskData)); 
        navigate('/')
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <p>Task Text</p>
          <input
            className={styles.input}
            {...register("text", { required: "Task text is required" })}
          />
          {errors.text && <span className={styles.span}>{errors.text.message}</span>}
        </div>
  
        <div>
         <p>Task Status</p>
          <select  {...register("status", { required: "Status is required" })} className={styles.select}>
            <option value="">Select Status</option>
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>
          {errors.status && <span className={styles.span}>{errors.status.message}</span>} 
        </div>
  
    
        <input type="hidden" {...register("date")} value={new Date().toISOString()} />
        <br />
        <br />
        <button type="submit" className={styles.button}>Add Task</button>
      </form>
    );
  };
  