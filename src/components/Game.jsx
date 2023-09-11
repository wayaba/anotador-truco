import { useState } from 'react'
import { getPoints, updatePoints } from '../services/points'
import CounterBoard from './CounterBoard'
//import confetti from 'canvas-confetti'
import { Modal } from './Modal'

export const Game = () => {
  const [points, setPoints] = useState(getPoints)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState({title:"", subtitle:""})

  const handleWeOnChange = (value) => {
    if (!(value >= 0 && value <= 30)) return
    const newPointsObject = {
      we: value,
      they: points.they
    }
    setCurrentPoints(newPointsObject, true, value)
  }

  const handleTheyOnChange = (value) => {
    if (!(value >= 0 && value <= 30)) return
    const newPointsObject = {
      we: points.we,
      they: value
    }
   
    setCurrentPoints(newPointsObject, false, value)
  }

  const setCurrentPoints = (newPointsObject, isWe, value) => {
    updatePoints(newPointsObject)
    setPoints(newPointsObject)

    if(value === 30){
      setTimeout(()=>{
        setModalMessage({
          title:`${isWe?'Nosotros ganamos':'Ellos ganaron'} el partido 🙂`,
          subtitle: "¿Jugamos de nuevo?"
        })
        setShowModal(true)
        //confetti()
      },500)
      
    }
  }

  const openModalRestart = () => {
    setModalMessage({
      title:`Reiniciar el juego.  🚨`,
      subtitle: "¿Estás seguro?"
    })
    setShowModal(true)
  }

  const handleRestart = () => {
    const newValue = {
      we: 0,
      they: 0
    }
    updatePoints(newValue)
    setPoints(newValue)
    
    setShowModal(false)
  }
  return (
    <section className="flex flex-col">
      <div className="flex flex-row text-white gap-2">
        <CounterBoard
          title="Nosotros"
          onChangePoints={handleWeOnChange}
          points={points.we}
        />
        <CounterBoard
          title="Ellos"
          onChangePoints={handleTheyOnChange}
          points={points.they}
        />
      </div>
      {showModal && (
        <Modal
          onConfirm={handleRestart}
          onClose={() => setShowModal(false)}
          title={modalMessage.title}
          subtitle={modalMessage.subtitle}
        />
      )}
      <div className="w-1/3 m-auto">
      <button
        type="button"
        onClick={openModalRestart}
        className="px-4 py-2 my-0 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Reiniciar
      </button>
      </div>      
    </section>
  )
}
