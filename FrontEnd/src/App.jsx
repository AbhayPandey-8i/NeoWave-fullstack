import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body  from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Browse from "./components/Browse.jsx";
import './App.css'

function App() {

  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse/>
    },

  ])

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>

    </>
  )
}

export default App
