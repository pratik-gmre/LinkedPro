import { Newspaper } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home2 = () => {
  return (
    <div className='bg-white h-screen w-screen'>

                <div className='w-[80%] m-auto flex justify-between items-center  '>

                    <div className='cursor-pointer  '> 
                        <img  className='h-24 w-36 ' src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="linkedPro logo" />
                    </div>
                    <div className='flex items-center justify-center' >


                        <div className='flex  justify-center items-center border-r'>
                            <div className='flex flex-col justify-center items-center p-3 space-x-3 '>
                                <Newspaper size={"20"}/>
                                <h1>Media</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-3 space-x-3 '>
                                <Newspaper size={"20"}/>
                                <h1>Media</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-3 space-x-3 '>
                                <Newspaper size={"20"}/>
                                <h1>Media</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center p-3 space-x-3 '>
                                <Newspaper size={"20"}/>
                                <h1>Media</h1>
                            </div>
                        </div>
                        <div className='flex justify-center items-center p-3 space-x-3 hover:cursor-pointer'>

                                <div className='font-semibold text-gray-700 p-3 hover:bg-slate-100 hover:rounded-3xl'><Link to={'/signup'}>Join now</Link></div>
                                <div><Link to={'/login'} className=' border border-blue-600  font-bold py-2 px-4 rounded-full text-blue-500 hover:bg-slate-100'>Sign in</Link></div>

                        </div>
                    </div>



                </div>



                <div className='flex justify-between  items-center w-full h-full ' >
                    <div className=' h-full w-full flex flex-col items-center justify-start  p-4 '>
                        <div className='flex flex-col justify-center  p-9  space-y-5'>

                        
                        <div className='text-6xl text-slate-500'>Welcome to your professional community</div>
                        <div className='flex  hover:bg-slate-100 items-start border   border-black rounded-full p-3 space-x-4 w-[60%]'><button  className='   w-full flex items-center justify-center space-x-3'>
                            <div><img className='h-6 w-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></div>
                            <div>Sign in with Google</div>
                            </button></div>
                            <div className='flex hover:bg-slate-100  items-start border  border-black rounded-full p-3 space-x-4 w-[60%]'><Link  to={"/login"} className='   w-full flex items-center justify-center space-x-3'>
                            <div className='font-semibold'>Sign in with email</div>
                            </Link></div>
                            <div></div>
                            <div className='text-sm'>By clicking Continue to join or sign in, you agree to LinkedIn’s 
                             <div className='flex '>   <h1 className='text-blue-500 hover:underline hover:cursor-pointer font-semibold'>User Agreement</h1>, <h1 className='text-blue-500 hover:underline hover:cursor-pointer font-semibold'>Privacy Policy</h1>, <h1 className='text-blue-500 hover:underline hover:cursor-pointer font-semibold'> Cookie Policy</h1>.</div></div>
                            <div className='flex  space-x-3'>
                                <h1>New to LinkedIn ? </h1>
                                <Link to={'/signup'} className='font-semibold text-blue-500 hover:underline'>Join now</Link>
                            </div>
                            </div>
                    </div>
                    <div className=' h-full w-full'> <img src="./authImg.svg" alt="" /></div>
                    


                </div>
    </div>
  )
}
