import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteTask, getAllTasks } from "../../app/tasksApi"
import styles from "./tasks.module.css"
import { TaskSelector } from "../selector/taskSelector"
import { useNavigate } from "react-router-dom"

export const Tasks = () => {
  const tasks = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selectedStatus, setSelectedStatus] = useState("")

  useEffect(() => {
    dispatch(getAllTasks())
  }, [])
  const filteredTasks = selectedStatus
    ? tasks.filter(task => task.status === selectedStatus)
    : tasks

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status)
  }
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
      <h1>Tasks</h1>
      <TaskSelector onChange={handleStatusChange} />
      {filteredTasks.map(task => (
        <div key={task.id} className={styles.task}>
          <p className={styles.taskText}>{task.text}</p>
          <p className={styles.taskStatus}>{task.status}</p>
          <p className={styles.taskDate}>{task.date}</p>
          <button onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
          <button onClick={() => handleDelete(task.id)}>delete</button>
        </div>
      ))}
    </>
  )
}
