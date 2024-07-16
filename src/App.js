import React from 'react'
import Login from "./pages/Login"
import Register from "./pages/Register"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoPageFound from './NoPageFound'
import State from './pages/State'
import Todo from './pages/Todo'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/state" element={<State />} />
          <Route path="/todo" element={<Todo />} />

          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App