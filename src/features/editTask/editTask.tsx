import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect, useState } from "react"
import { updateTask } from "../../app/tasksApi"
import { IStatus, ITask } from "../tasks/types"
import styles from "./editTask.module.css"

export const EditTask = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const task = useAppSelector(state => state.tasks.find(task => task.id === id))

  const [text, setText] = useState(task?.text || "")
  const [status, setStatus] = useState(task?.status || IStatus.pending)
  const [date, setDate] = useState(task?.date || "")

  if (!task) {
    navigate("/")
  }
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) {
      return
    }
    const edited: ITask = { id, text, status, date }
    if (id) {
      dispatch(updateTask(edited))
      navigate("/")
    }
  }

  return (
    <div className={styles.editTask}>
      <h2>Edit Task</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Task Description"
        />
        <select
          value={status}
          onChange={e => setStatus(e.target.value as IStatus)}
        >
          <option value="">Select Status</option>
          <option value="pending">pending</option>
          <option value="on progress">in progress</option>
          <option value="completed">completed</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  )
}
