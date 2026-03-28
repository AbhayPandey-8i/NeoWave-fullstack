import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body  from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Browse from "./components/Browse.jsx";
import { Toaster } from 'react-hot-toast';
import './App.css'
import MovieDialog from "./components/MovieDialog.jsx";

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
       <Toaster/>
       <MovieDialog/>
      </div>

    </>
  )
}

export default App
