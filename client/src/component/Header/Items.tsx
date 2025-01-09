import { cn } from '@/lib/utils'
import React from 'react'

interface ItemProps { 
    icon: React.ReactNode
    isActive: boolean
    description: string
}

export const Items = ({icon,isActive,description}: ItemProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-3  space-x-1 cursor-pointer h-full ", isActive ? "border-b-2 border-black" :"")}>
            <div>
                {icon }
                </div>
            <span className='text-xs'>{description}</span>
    </div>
  )
}
