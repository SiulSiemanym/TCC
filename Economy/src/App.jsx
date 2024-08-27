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
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Home from './pages/home'
import CatalogAnimal from './pages/animal'
import Footer from './components/footer'

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
      <Helmet >
        <title>aaa</title>
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Animal nome="arara" id={"ae"} descricao="pinto ereto amo pau erguido todos os meus manos levam pica de bandido" ></Animal>
      <RouterProvider router={router} />
      <Footer></Footer>
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
