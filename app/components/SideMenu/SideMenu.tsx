'use client'
import React  from 'react'
import Dashboard from './icons/Dashboard'
import Notes from './icons/Notes'
import Videos from './icons/Videos'
import Class from './icons/Class'
import Subject from './icons/Subject'
import { useStore } from '../../store/appStore'
import { openMenu } from '../../store/sideMenuStore'


export default function SideMenu() {
    const { open } = openMenu()
    const {index, changeIndex} = useStore()
       


  return (
    <nav className={`transition-all bg-[#292a2f] ${ open ? 'translate-x-0' : '-translate-x-[100%]'} lg:translate-x-0 max-w-[240px] py-8 px-[1.2rem] fixed lg:relative z-50 top-0 bottom-0`}>
        
        <div onClick={() => changeIndex(1)} className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 1 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Dashboard stroke={index == 1 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 1 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Dashboard</span>
        </div>

        <div onClick={() => changeIndex(2)} className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 2 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Notes fill={index == 2 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 2 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Notes</span>
        </div>

        <div onClick={() => changeIndex(3)} className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 3 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Videos stroke={index == 3 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 3 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Videos</span>
        </div>

        <div  onClick={() => changeIndex(4)}className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 4 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Class stroke={index == 4 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 4 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Class</span>
        </div>

        <div onClick={() => changeIndex(5)} className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 5 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Subject stroke={index == 5 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 5 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Subject</span>
        </div>

        <div onClick={() => changeIndex(6)} className={`flex mb-5 p-[0.6rem] cursor-pointer ${index == 6 ? 'bg-[#7CF5B2] rounded-[10px]' : ''}`}>
            <Dashboard stroke={index == 6 ? '#191C2D' : '#ECEEF5'}/>
            <span className={`${index == 6 ? 'text-[#191C2D]' : 'text-white'} text-lg ml-4 font-semibold`}>Term</span>
        </div>
        
        
    </nav>
  )
}
