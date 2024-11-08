import React, { useContext, useEffect, useState } from 'react'

import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { modalContext } from '../contexts/modalContex';

const Card = () => {
    const date = new Date();
    const [fileCount, setFileCount] = useState(0)
    const handleModalOpen = useContext(modalContext);


    useEffect(() => {
        fetch(`http://localhost:4000/api/files/count`)
            .then(res => res.json())
            .then(data => {
                setFileCount(data.count)
            })
    }, [])

    return (
        <div className=' bg-white p-2 rounded-md mb-4'>
            <div className='flex justify-between text-sm font-semibold'>
                <span className=' flex'><img className=' rounded-full h-10 w-10' src="/images/profile.jpg" alt="profile" /><span className=' mt-2'>CLient Name</span></span>
                <span className=' flex'><img className='rounded-full h-10 w-10' src="/images/profile2.jpg" alt="profile" /><span className='mt-2'>Sadik Istiak</span></span>
            </div>
            <div className=' text-slate-600 my-3 flex justify-between text-sm'>
                <p className='flex '><span className='mt-1 me-1'><RiStackFill /></span>Lorem, ipsum dolor sit amet con....</p>
                <div className='flex bg-slate-100 rounded-md px-1'><span className='mt-1'><FaClipboardList /></span> <span className='mb-1'>1/2</span></div>
            </div>
            <div className='flex justify-between font-semibold text-sm'>
                <div><img className=' rounded-full h-10 w-10' src="/images/profile3.jpg" alt="profile" /></div>
                <div><img className=' rounded-full h-10 w-10' src="/images/profile4.jpg" alt="profile" /></div>
                <div className=' h-9 w-9 rounded-full bg-slate-100 p-[6px] text-black text-sm'>12+</div>
                <div className='flex mt-1'><span className='mt-2 me-1'><FaRegComments /></span><span className='mt-1'>15</span></div>
                <div onClick={handleModalOpen} className='flex mt-1'><span className='mt-2 me-1'><GrAttachment /></span><span className='mt-1'>{fileCount}</span></div>

                <div className='flex mt-1'><span className='mt-2 me-1'><FaRegCalendarDays /></span><span className='mt-[6px]'>{date.toLocaleDateString('en-GB').replace(/\//g, '-')}</span></div>
            </div>
        </div>
    )
}

export default Card
