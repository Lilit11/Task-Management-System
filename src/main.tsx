import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AddTask } from "./features/addTask/addTask"
import { EditTask } from "./features/editTask/editTask"
import { Layout } from "./features/layout/layout"
const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use MainLayout here
    children: [
      {
        index: true, // This will be the default route
        element: <App />, // Main App component
      },
      {
        path: 'add',
        element: <AddTask />
      },
      {
        path: 'edit/:id',
        element: <EditTask />
      },
    ]
  }
]);


if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
