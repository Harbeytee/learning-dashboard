'use client'
import React, { useEffect } from 'react'
import { Andika } from 'next/font/google'
import axios from 'axios'
import { useStore } from '../store/appStore'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import eye from '../../public/lessons/eye.svg'
import pencil from '../../public/lessons/pencil.svg'
import deletes from '../../public/lessons/delete.svg'
import { hoverStore } from './store/hoverStore'
import { Lesson } from '../types'
const andika = Andika({ subsets: ['latin'], weight: ['400' , '700']})


export default function Lessons() {
  const {subjectId, setLessons, lessons, subjects,} = useStore()
  const { index, changeIndex } = hoverStore()

  
  function toCapital(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  
    const retrieveLessons = async () => {
         
            const response = await axios.get(`https://api-test-f4ae.up.railway.app/v1/lessons/bysubject/${subjectId}`)
            return response.data.data
             }
    
    
    const {
      data,
      isLoading,
  
      } = useQuery({queryKey: ["lessons", subjectId], queryFn: () => retrieveLessons() })

   
      React.useEffect(() => {
      
        if(data !== undefined ) {
          setLessons(data.map((val:any) => ({
            id: val.subjectId._id,
            coverImage: val.subjectId.defaultImage,
            topic: val.title,
            viewed: val.views
          })))

      }
       
      }, [data])

    
      

  return (
    <table className='w-full text-left border-l border-[#191C2D]'>
      <thead className={`${andika.className}`}>
        <tr className='w-full border-[#4e5058] border-b-4 text-[18px] lg:text-lg text-[#191C2D] font-bold'>
          <th className='px-[4px] lg:px-4 py-3 '>ID</th>
          <th className='px-[4px] lg:px-4 py-3'>Cover image</th>
          <th className='px-[4px] lg:px-4 py-3'>Topic</th>
          <th className='px-[4px] lg:px-4 py-3'>Viewed</th>
          <th className='px-[4px] lg:px-4 py-3'>Actions</th>

        </tr>

      </thead>
      <tbody className={`${andika.className} relative`}>
        
        {
         
         
         lessons !== undefined && subjects.length!== 0?
          !isLoading?
           
          lessons.map((val:Lesson, i) => (
            <tr onMouseEnter={() => changeIndex(i)} onMouseLeave={() => changeIndex('')} key={i} className={`border-[#b4b9ca] border-b-[1px] hover:bg-[#ECEEF5] text-[10px] lg:text-[16px]`}>
              <td className='px-[8px] lg:px-4 py-2'>{val.id.slice(0,4)}</td>
              <td className='px-[8px] lg:px-4 py-2 '>
                <div className=' border border-[1px] border-[#4e5058] rounded-[15px] max-w-[92px] lg:max-w-[153px] max-h-[53px]'>
                  <Image className='mx-auto w-[22px] h-[22px] lg:w-[153px] lg:h-[53px] ' src={val.coverImage} width={113} height={63} alt={''} />

                </div>
                
              </td>
              <td className='px-[8px] lg:px-4 py-2 '>{toCapital(val.topic)}</td>
              <td className='px-[8px] lg:px-4 py-2 text-center'>{val.viewed}</td>
              <td className={`px-[8px] lg:px-4 py-2 flex justify-center lg:justify-normal mr-4 mt-[2px] lg:mr-24 lg:mt-2 visible ${index === i ? 'lg:visible' : 'lg:invisible'}`}>
                <Image className='mr-[0.3rem] cursor-pointer w-[15px] h-[15px] lg:w-[35px] lg:h-[35px]' src={eye} width={15} height={15} alt={'icon of a eye'}/>
                <Image className='mr-[0.3rem] cursor-pointer w-[15px] h-[15px] lg:w-[35px] lg:h-[35px]' src={pencil} width={15} height={15} alt={'icon of a pencil'}/>
                <Image className='mr-[0.3rem] cursor-pointerw-[15px] h-[15px] lg:w-[35px] lg:h-[35px]' src={deletes} width={15} height={15} alt={'icon of a trash can'}/>

              </td>
          </tr>
          ))

          :
          <tr className='text-center text-lg top-8 left-[45%] absolute'><td >Loading...</td></tr>
          :
          <tr  className='hover:bg-[#ECEEF5]'>
            <td className='px-4 py-3'>null</td>
            <td className='px-4 py-3'>null</td>
            <td className='px-4 py-3'>null</td>
            <td className='px-4 py-3'>null</td>
            <td className='px-4 py-3'>null</td>
          </tr>

        }
        

      </tbody>
      
    
    </table>
  )
      

}
