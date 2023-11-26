'use client'
import React, { ChangeEvent, useEffect } from 'react'
import Image from 'next/image'
import search from '../../public/Notes/search.svg'
import cross from '../../public/Notes/cross.svg'
import chevron from '../../public/header/chevron.svg'
import { useStore } from '../store/appStore'
import { openMenu } from '../store/sideMenuStore'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Suspense } from 'react'
import { Class } from '../types'

export default function Notes() {

    const {open, setOpen} = openMenu()
    const {classes, setClass, setId, id} = useStore()
    
    


    const retrieveClass = async () => {
        const response = await axios.get('https://api-test-f4ae.up.railway.app/v1/classes/groups')
        
        //console.log(response.data.data)
        return response.data.data
    }
    
    // const prefetchClass = async () => {
    //     await queryClient.prefetchQuery({queryKey: ['classes', classes], queryFn: () => retrieveClass})
    // }

    
   
    const {
        data: data,
        error,
        isLoading,

    } = useQuery<Class[]>({queryKey: ['classes', classes], queryFn: () => retrieveClass(), })
       
    useEffect(() => {
        data !== undefined && setClass(data) 
        data !== undefined && setId(data[0]._id) 
        
       
       
    }, [data])

   


    

    
    
   

  return (
    <>
    <div onClick={setOpen} className='fixed top-[5px] left-[5px] z-[100] flex flex-col lg:hidden'>
        <span className='w-[30px] h-[3px] block bg-green-600 mt-[0.3rem]'></span>
        <span className='w-[30px] h-[3px] block bg-green-600 mt-[0.3rem]'></span>
        
    </div>
    <div className='flex flex-wrap w-full justify-between items-center w-full p-6 py-5 bg-[#F6F6F6] border border-[#4E5058] mb-8 lg:mb-auto'>
        <div className='font-extrabold text-[18px] lg:text-[33px]'>Notes</div>
        <div className='flex flex-wrap items-center'>

            <div className='relative mt-3 lg:mt-3 '>
                <select onChange={(e) => setId(e.target.value)} value={id} className='cursor-pointer appearance-none text-base bg-white font-bold text-[#191C2D] lg:ml-3  flex px-3 py-[0.8rem] rounded-[15px] items-center border border-[#191C2D] focus:outline-none focus:bg-[#45CD81] pr-8' name="term" id="term">
                    <Suspense fallback='loading'>
                        {classes !== undefined && classes.map((val:Class) => (
                        <option  key={val._id} value={val._id}>{val.name}</option>
                        ))}
                    </Suspense>
                    
                    
                </select>
                <Image className='transform rotate-90 bg-trasparent absolute right-[6.5px] top-[30%] w-[20px] h-[20px]' src={chevron} width={20} height={20} alt ='icon of a dropdown chevron'/>
            </div>


            <div className='relative mt-3 lg:mt-3 '>
                <select className='cursor-pointer appearance-none text-base bg-white font-bold text-[#191C2D] ml-3 flex px-3 py-[0.8rem] rounded-[15px] items-center border border-[#191C2D] focus:outline-none focus:bg-[#45CD81] pr-8' name="term" id="term">
                    <option value='first'>1st term</option>
                    <option value='second'>2nd term</option>
                    <option value='third'>3rd term</option>
                    
                </select>
                {/* w-[20px] h-[20px] */}
                <Image className='transform rotate-90 bg-trasparent absolute right-[6.5px] top-[30%] w-[20px] h-[20px]' src={chevron} width={20} height={20} alt ='icon of a dropdown chevron'/>
            </div>
            

            <div className='bg-white flex px-3 py-[0.8rem] ml-3 mr-3 lg:mr-auto mt-3 lg:mt-3  rounded-[15px] items-center border border-[#191C2D]'>
                <Image className='mr-[0.7rem]' src={search} width={16} height={16} alt ='icon of a magnifying glass'/>
                <input className='placeholder-gray-500 focus:outline-none ' type="text" placeholder='Search'/>

            </div>

            <div className='flex bg-[#7CF5B2] lg:ml-3 mt-3 lg:mt-3 px-6 py-[0.8rem] rounded-[15px] items-center border border-[#191C2D]'>
                <span className='text-[#191C2D] text-lg font-bold mr-4'>Create note</span>
                <Image src={cross} width={16} height={16} alt ='icon of a plus sign'/>
            </div>

        </div>
        
    </div>
    </>
  )
}
