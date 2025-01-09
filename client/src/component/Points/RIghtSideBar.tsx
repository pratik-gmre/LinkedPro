import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { ArrowRightFromLine, Plus } from 'lucide-react'
import React from 'react'

export const RIghtSideBar = () => {
  
  return (
    <div className='w-[25%]'>
      <Card>
        <CardHeader className='font-semibold'>Add to your feed</CardHeader>
        <CardContent>
          <div className='flex space-x-3'>
         <div> <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar></div>
         <div>
          <div>
            <h1>name</h1>
            <h1>bio</h1>
            <Button size='sm' className='text-black font-semibold text-md border rounded-3xl bg-transparent hover:border-black hover:bg-white'>
              <Plus/>
              <h1>Follow</h1>
            </Button>
          </div>
         </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center items-center text-sm space-x-2 hover:underline hover:bg-slate-500'>
          <div>View All Suggestions</div>
          <div><ArrowRightFromLine size="15"/></div>
        </CardFooter>
      </Card>
    </div>
  )
}
