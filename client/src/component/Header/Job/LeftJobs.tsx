import { Card, CardContent } from '@/components/ui/card'
import { Bookmark, Layers, Logs } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const LeftJobs = () => {
  return (
    <div className='w-[25%]'>
    <div className='flex flex-col justify-center items-center'>
        <Card>
            <CardContent>
              <div> hello</div>  

            </CardContent>
        </Card>



       <div className="text-xs w-full flex flex-col justify-center items-center border shadow rounded-lg  bg-white">
       
        <div className='w-full flex hover:bg-slate-100 p-3  m-2'>
            <Link to='/feed'>
            <div className='flex space-x-3'>

            <Logs/>
            <div className='text-sm font-semibold'>Preferences</div>
            </div>
             </Link>
        </div>
        <div className='w-full flex hover:bg-slate-100 p-2 '>
            <Link to='/feed'>
            <div className='flex space-x-3'>

            <Bookmark/>
            <div className='text-sm font-semibold'>My Job</div>
            </div>
             </Link>
        </div>
        <div className='w-full flex hover:bg-slate-100 p-2 m-2'>
            <Link to='/feed'>
            <div className='flex space-x-3'>

            <Layers/>
            <div className='text-sm font-semibold'>Interview Prep</div>
            </div>
             </Link>
        </div>
       </div>

     
        
    </div>
</div>
  )
}
