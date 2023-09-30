import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Post from '../../Components/Post/Post'

export default function Home() {
  return (
    <div>
      <Header />

      <div className='flex px-10'>
        {/* post section */}
        <div className='grid md:grid-cols-2 gap-5  w-[75%]'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* about section  */}
        <div className='w-[25%]'>
          <Sidebar />

        </div>

      </div>
    </div>
  )
}
