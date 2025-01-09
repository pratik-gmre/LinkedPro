import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { Users2 } from 'lucide-react'

export const LeftNetwork = () => {
  return (
    <div className='w-[30%] overflow-y-auto space-y-4' >
      
      <Card>
        <CardHeader>
          <h1 className='font-semibold'>Manage My Network</h1>
        </CardHeader>
        <Separator/>
        <CardContent className='mt-3 w-full'>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Connections</div>
            </div>
            <div>10</div>
            </div>
            
            </Link>



            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Contacts</div>
            </div>
           
            </div>
            
            </Link>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Followers & Following</div>
            </div>

            </div>
            
            </Link>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Groups</div>
            </div>

            </div>
            
            </Link>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Events</div>
            </div>

            </div>
            
            </Link>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Pages</div>
            </div>
            <div>10</div>
            </div>
            
            </Link>
            <Link to={'/mynetwork/invite-connection/connections'}>
            <div className='flex justify-between hover:bg-slate-100 hover:rounded-xl p-2 w-full text-muted-foreground font-semibold'>

            <div className='flex space-x-3'>
            <Users2/>
            <div>Newsletter</div>
            </div>

            </div>
            
            </Link>
           
            
        </CardContent>
      </Card>
      
          <div>
            <img className='w-full rounded-xl' src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
          </div>

          <div className='flex space-x-2'>
            <img className='h-5 w-5 ' src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
            <div className='text-xs '>LinkedIn Corporation © 2024</div>
          </div>
        
    </div>
  )
}
