import React from 'react'
import UserMenu from '../components/UserMenu'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className='bg-white'>
      <div className='container grid px-3 mx-auto lg:grid-cols-[250px,1fr]'>
        {/* {left part} */}
        <div className='sticky hidden py-4 overflow-y-auto top-24 lg:block'>
          <UserMenu />
        </div>
          


        {/* {right part} */}
        <div className='p-4 bg-white'>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
