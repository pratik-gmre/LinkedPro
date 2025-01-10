import React from 'react'
import { LeftJobs } from './LeftJobs'
import { MainJobs } from './MainJobs'
import { RightJobs } from './RightJobs'
import { AppLayout } from '../../../shared/Applayout'

 const Jobs = () => {
  return (
    <div className=' bg-[#f4f2ee] h-screen w-full   '>
      <div className='w-[80%] m-auto flex justify-between'>


      <LeftJobs/>
      <MainJobs/>
      <RightJobs/>
      </div>

    </div>
  )
}


export default AppLayout(Jobs)