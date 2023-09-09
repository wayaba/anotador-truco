import { useState } from 'react'
import CounterBoard from './CounterBoard'
import { getPoints, updatePoints } from '../services/points'



export const Game = () => {
  
  const [points] = useState(getPoints)

  const handleWeOnChange = (value) => {
    updatePoints({
      we: value,
      they: points.they
    })
  }

  const handleTheyOnChange = (value) =>{
    updatePoints({
      we: points.we,
      they: value
    })
  }
  return (
    <div className="flex flex-row text-white gap-4">
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
  )
}
