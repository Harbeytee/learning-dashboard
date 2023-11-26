'use client'
import React, { useEffect } from 'react'
import { useStore } from '../store/appStore'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Subject } from '../types'
export default function Subjects() {
  

    const {id, setSubjects, subjects, setSubjectId, subjectId} = useStore()

  

    const retrieveSubjects = async () => {
        
        const response = await axios.get(`https://api-test-f4ae.up.railway.app/v1/subjects/bygroupId/${id}`)
        
        return response.data.data
        
    }
    
    const {
      data,
      error,
      isLoading,
     // refetch
      } = useQuery({queryKey: ["subjects", id], queryFn: () => retrieveSubjects() })
      
    
    

    useEffect(() => {
      
     
      data !== undefined && setSubjects(data.map((val:Subject) => ({_id: val._id, name:val.name})))
      data !== undefined && data.length !== 0 && setSubjectId(data[0]._id) 

    }, [data])


    const changeSubjectId = (id: string) => {
        setSubjectId(id)
       
    }

    
  return (
    <table className='w-screen lg:w-[28%] lg:max-w-[279px] flex flex-col bg-[#eceef5]'>
      <thead className='w-full border-[#4e5058] border-b-4 px-4 lg:py-3 pb-4 lg:pb-3 text-lg text-[#191C2D] font-bold'>
        <tr >
          <th>Subjects</th>
        </tr>

      </thead>
      <tbody className='bg-[#eceef5] text-[#191C2D] font-normal'>
        
       
          {
            subjects !== undefined && subjects.length !== 0?
            !isLoading?
          subjects.map((val:Subject) =>(
              <tr key={val._id} >
                <td onClick={(e) => changeSubjectId(val._id)} className={`hover:bg-[#fff] ${val._id == subjectId?  '!bg-[#45CD81] font-bold' : 'bg-[#eceef5] font-normal'} text-[16px] lg:text-base  cursor-pointer pl-5 py-5 w-screen lg:w-[300px]`}>{val.name}</td>
              </tr>
          ))
         
            :
            <tr >
              <td className='bg-[#eceef5] text-[14px] lg:text-base  cursor-pointer pl-4 py-3 w-screen lg:w-[300px]'>Loading...</td>
            </tr>
             : 
             <tr >
             <td className='bg-[#eceef5] text-[14px] lg:text-base  cursor-pointer pl-4 py-3 w-screen lg:w-[300px]'>null</td>
           </tr>

          }
        
        

      </tbody>
      
    </table>


    // <aside>
    //   <span className='w-[20%] max-w-[249px] border-r border-[#191C2D] h-full'>Subjects</span>
    // </aside>
  )
}
