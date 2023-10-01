import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Post from '../../Components/Post/Post' 
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios('/api/posts')
        setPosts(result.data)
        console.log(result.data);
      } catch (error) {

      }
    }

    getPosts()
  }, [])
  return (
    <div>
      <Header />

      <div className='md:flex  gap-5 md:px-10 px-5'>
        {/* post section */}
        <div className='grid md:grid-cols-2 gap-5 md:w-[75%] w-full'>
          {
            posts.map((post, index) => (
              <Post key={index} post={post} />
            ))
          }
        </div>

        {/* about section  */}
        <div className='md:w-[25%] mt-5 w-full'>
          <Sidebar />

        </div>

      </div>
    </div>
  )
}
