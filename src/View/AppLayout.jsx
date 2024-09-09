import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function AppLayout() {
  return (
    <div className='min-h-screen grid grid-cols-[16.6rem,1fr] grid-rows-[auto,1fr]'>
      
   <Header/>
   <SideBar/>
      <main className='bg-[#F9FAFB] py-6 px-12 '>
      <Outlet/>
      </main>
      </div>
  )
}

export default AppLayout