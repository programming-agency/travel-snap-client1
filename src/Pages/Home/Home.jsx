import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Post from '../../Components/Post/Post'

export default function Home() {
  return (
    <div>
      <Header />

      <div className='md:flex  gap-5 md:px-10 px-5'>
        {/* post section */}
        <div className='grid md:grid-cols-2 gap-5 md:w-[75%] w-full'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* about section  */}
        <div className='md:w-[25%] mt-5 w-full'>
          <Sidebar />

        </div>

      </div>
    </div>
  )
}
