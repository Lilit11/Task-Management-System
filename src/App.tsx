import "./App.css"
import { Link } from "react-router-dom"
import { Tasks } from "./features/tasks/tasks"
import { TaskSelector } from "./features/selector/taskSelector"
import { Statistics } from "./features/statistics/statistics"

const App = () => {
  return (
    <>
      <Tasks/>
      <Statistics/>
    </>
  )
}

export default App
