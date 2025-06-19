import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Strawberry from './pages/Strawberry'
import BlueBerry from './pages/BlueBerry'
import Chocolate from './pages/Chocolate'
import EverGreen from './pages/EverGreen'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Strawberry />} />
      <Route path='/strawberry' element={<Strawberry />} />
      <Route path='/blueberry' element={<BlueBerry />} />
      <Route path='/chocolate' element={<Chocolate />} />
      <Route path='/evergreen' element={<EverGreen />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default App
