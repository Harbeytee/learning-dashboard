import React from 'react'
import Image from 'next/image'
import note from "../../public/header/note-icon.svg"
import user from "../../public/header/user.svg"
import chevron from "../../public/header/chevron.svg"

export default function Header() {
  return (
    <header className='flex justify-between items-center p-[1rem] lg:p-[1.5rem] border-b-2 border-[#64666c] '>
        <div className='flex items-center'>
            <Image src={note} width={40} height={40} alt={'icon of a tiny note'}/>
            <span className='ml-[0.5rem] font-extrabold lg:text-2xl'>Classnotes</span>

        </div>

        <div className='flex items-center'>
            <Image src={user} width={40} height={40} alt={'display picture of user'}/>
            <span className='ml-[0.5rem] mr-[1rem] lg:text-lg font-normal text-[18px]'>Joshua</span>
            <Image className='w-[15px] h-[15px]' src={chevron} width={15} height={15} alt={'icon for dropdown'}/>
        
        </div>
    </header>
  )
}
