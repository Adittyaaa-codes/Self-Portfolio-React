import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
