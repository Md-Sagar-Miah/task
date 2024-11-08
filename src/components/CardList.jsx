import React from 'react'
import Card from './Card';

const CardList = ({ taskListName, taskCapsule, capsuleColor }) => {

    return (
        <section className=' w-96 m-2 bg-slate-100 py-3 px-2 text-slate-600 h-screen overflow-hidden'>
            <div className={` flex justify-between mb-2 px-3 py-2 `}>
                <h1 className='h-6 relative'>
                    <span className={taskCapsule ? `h-6 w-6 inline-block rounded-s-full ${capsuleColor}` : "hidden"}></span>
                    <span className='ms-1 absolute top-0 w-96 font-semibold'>{taskListName}</span>
                </h1>
                <p className='bg-slate-200 px-3 py-1 rounded-md font-semibold'>0</p>
            </div>

            <div className='max-h-[90%] overflow-y-scroll custom-scroll custom-scroll-width mb-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </section>
    )
}

export default CardList
