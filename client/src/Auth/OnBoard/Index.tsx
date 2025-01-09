import React from 'react'
import { NotStudent } from './NotStudent'
import { Student } from './Student'





const components = { 
    1:NotStudent,
    2:Student
}

export const IndexStudent = () => {

    const [component,setComponent] = React.useState(1)
    const Component = components[component]
  return (
    <div><Component setComponent={setComponent}/></div>
  )
}