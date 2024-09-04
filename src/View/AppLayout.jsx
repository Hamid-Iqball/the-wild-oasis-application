import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function AppLayout() {
  return (
    <div className='min-h-screen grid grid-cols-[28rem,1fr] grid-rows-[auto,1fr]'>
   <Header/>
   <SideBar/>
      <main className='bg-[#F9FAFB] py-[4rem] px-[6rem]'>
      <Outlet/>
      </main>
      </div>
  )
}

export default AppLayout