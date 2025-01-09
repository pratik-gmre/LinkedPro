import React from 'react'
import { CreatePost } from './CreatePost'
import { Post } from './Post'

export const Main = () => {
  return (
    <>
    <div className='w-[50%]  space-y-5'>
    <CreatePost />
    <Post/>

    </div>

    </>
  )
}
