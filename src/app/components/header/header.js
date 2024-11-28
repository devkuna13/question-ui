import React from 'react'
import headStyle from "./header.module.css"
export const Header = () => {
  return (
    <div className='text-center bg-primary'>
       <h1 className={headStyle.headerDiv}> End to End Question Application</h1>
    </div>
  )
}
