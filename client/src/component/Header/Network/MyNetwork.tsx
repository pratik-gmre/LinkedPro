import React from 'react'
import { Header } from '../Header'
import { LeftNetwork } from './LeftNetwork'
import { MainNetwork } from './MainNetwork'



export const MyNetwork = () => {
  return (
    <>

    <div className='bg-[#f4f2ee] h-screen w-screen overflow-y-auto '>
    <div className=' w-[80%] mx-auto mt-10 space-x-10 flex  border '>

      <LeftNetwork/>
      <MainNetwork/>
      </div>
    </div>
    </>
  )
}
