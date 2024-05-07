import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Auth from './presentation/pages/auth'
import AuthPages from './presentation/pages/auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPages from './presentation/pages/register'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
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
      </p> */}
      {/* <AuthPages /> */}

      {/* main code */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPages/>} />
          <Route path='/register' element={<RegisterPages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
