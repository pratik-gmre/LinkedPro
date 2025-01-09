import React from 'react'
import { Items } from './Items'
import { House } from 'lucide-react';
import { Users } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { UserProfile } from './UserProfile';
import { Link } from 'react-router-dom';

export const HComponent = () => {
  return (
    <div className='flex items-center justify-center space-x-3 h-full '>
        <div className='flex items-center justify-center space-x-3 h-full border-r pr-7'>

        <Link to={"/feed"}><Items icon={<House size="20"/>} description='Home' isActive={true}/></Link>
        <Link to={"/mynetwork"}><Items icon={<Users size="20"/>} description='My Network' isActive={false}/></Link>
        <Link to={"/jobs"}><Items icon={<BriefcaseBusiness size="20"/>} description='Jobs' isActive={false}/></Link> 
        <Link to={"/messages"}><Items icon={<MessageCircleMore size="20"/>} description='Messages' isActive={false}/></Link>
        <Link to={"/notifications"}><Items icon={<Bell size="20"/>} description='Notification' isActive={false}/></Link> 
       <UserProfile/>
        </div>
        <Items icon={<Bell size="20"/>} description='Notification' isActive={false}/>
        <Items icon={<Bell size="20"/>} description='Notification' isActive={false}/>
        


    </div>
  )
}
