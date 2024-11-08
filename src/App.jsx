import React, { useState } from 'react'
import CardList from './components/CardList'
import Modal from './components/Modal'
import { modalContext } from './contexts/modalContex'


const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalOpen = () => {
    setIsOpenModal(!isOpenModal)
  }
  return (<>
    {
      isOpenModal ? <Modal handleModalOpen={handleModalOpen} /> : <div className=" grid grid-flow-col p-2  overflow-x-scroll custom-scroll custom-scroll-horizontal">
        <modalContext.Provider value={handleModalOpen}>
          <CardList taskListName={"Incomplete"} taskCapsule={true} capsuleColor={"bg-red-500"} />
          <CardList taskListName={"To Do"} taskCapsule={true} capsuleColor={"bg-cyan-500"} />
          <CardList taskListName={"Doing"} taskCapsule={true} capsuleColor={"bg-yellow-300"} />
          <CardList taskListName={"Under Review"} />
          <CardList taskListName={"Completed"} />
        </modalContext.Provider>
      </div>
    }
  </>
  )
}

export default App
