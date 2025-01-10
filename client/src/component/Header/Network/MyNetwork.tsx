

import { LeftNetwork } from './LeftNetwork'
import { MainNetwork } from './MainNetwork'
import { AppLayout } from '../../../shared/Applayout'



 const MyNetwork = () => {
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

export default AppLayout(MyNetwork)
