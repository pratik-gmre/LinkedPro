import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export const LeftSideBar = () => {
  return (
    <div className='w-[25%]'>
        <div className='flex flex-col justify-center items-center'>
            <Card>
                <CardContent>
                  <div> </div>  

                </CardContent>
            </Card>
           <div className="text-xs bg-white w-full flex flex-col justify-center items-center border shadow rounded-lg p-3">
           <div>Grow Professionaly with Premium</div>

<div className='font-semibold hover:text-blue-700 hover:cursor-pointer'>Try 1 month for $0</div>
           </div>

           <div className="text-xs flex flex-col bg-white  border shadow rounded-lg p-3 w-full"> 
            <div className='flex justify-between font-semibold' > 
              <div>Profile Viewer</div>
              <div>7</div>
            </div>
            <div className='font-semibold'>View all analytics</div>
           </div>
            
        </div>
    </div>

  )
}
