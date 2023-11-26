'use client'
import React from 'react'
import { useStore } from './store/zustand'
export default function page() {

  

  

    const {index, changeIndex, add, substract} = useStore()
  return (
    <div>
        <p>The number is {index}</p>
        <button className='bg-blue-500' onClick={add}>add</button>
        <button className='bg-red-500' onClick={substract}>subtract</button>
    </div>
  )
}
