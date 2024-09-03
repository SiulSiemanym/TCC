import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement } from 'react'
import Animal from './components/criarelementotabela'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import { Helmet } from "react-helmet"
import { createBrowserRouter, Link, Route, RouterProvider } from "react-router-dom"
import Home from './pages/home'
import CatalogAnimal from './pages/animal'
import Footer from './components/footer'
import styles from "./Css/home.module.css"

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {

  }, [])



  console.log("recarregou")

  /*
    state
    criar
    interage
    muda o state
    recarrega
    recria com o novo state
  */
  return (
    <>
 
    <RouterProvider router={router} />
  </>

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/CatalogAnimal",
    element: <CatalogAnimal />
  }
])



export default App
