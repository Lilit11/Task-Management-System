import { useAppSelector } from "../../app/hooks"

export const Statistics = () => {
  const tasks = useAppSelector(state => state.tasks)
  const pendings = tasks.filter(task => task.status === "pending").length
  const completeds = tasks.filter(task => task.status === "completed").length
  const inProgressCount = tasks.filter(
    task => task.status === "in progress",
  ).length
  const total = tasks.length
  return (
    <>
      <h3>Summary</h3>
      <p>
        pending: {pendings}/{total}
      </p>
      <p>
        completed:{completeds}/{total}
      </p>
      <p>
        in progress: {inProgressCount}/{total}
      </p>
    </>
  )
}
