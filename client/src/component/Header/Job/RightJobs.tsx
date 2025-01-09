import { ArrowRightFromLine } from 'lucide-react'
import React from 'react'

export const RightJobs = () => {
  return (
    <div className='w-[25%]'>

    
    <div className='text-xs w-full flex flex-col justify-start items-center border shadow rounded-lg  space-y-3 bg-white'>

        <div className='p-2'>

            <div className='text-base font-semibold'>Job Seeker guidance</div>
            <div className='text-xs text-muted-foreground'>Recommended based on your activity</div>
        </div>



        <div className='flex m-2 hover:bg-slate-100 w-full items-center justify-center space-x-2 '>
            <div className='font-semibold '>
                I want to imporve my resume
            </div>
            <div>
            <img  className="h-14 w-16 rounded-xl" src="https://www.linkedin.com/dms/prv/image/v2/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/learning-public-crop_60_100/0/1568251157263?m=AQLVPhsq3fD_KQAAAZNDmbLvSEwzFdRDhTv0iostfkwYTc7Es9WVbJMujYo&amp;e=1732092366&amp;v=beta&amp;t=pdFYe6Qst8UO2Of514OGlB_ol4eULS89BLen7pSxD0Y" loading="lazy" height="56" alt="" id="ember75" />
                </div>
        </div>




        <div>
            <div className='text-xs font-medium m-2'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</div>
            <div className='flex text-muted-foreground space-x-1 m-2  hover:text-blue-600 hover:cursor-pointer hover:underline' >
                <h1 className='font-semibold '>Show more</h1>
                <ArrowRightFromLine size={15}/>
            </div>
        </div>
    </div>
    </div>
  )
}
