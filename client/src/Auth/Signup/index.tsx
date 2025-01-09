import React from 'react'

import { SignUp2 } from './SignUp2'
import SignUp from './SignUp'




const components = { 
    1:SignUp,
    2:SignUp2
}

export const Index = () => {

    const [component,setComponent] = React.useState(1)
    const Component = components[component]
  return (
    <div><Component setComponent={setComponent}/></div>
  )
}
