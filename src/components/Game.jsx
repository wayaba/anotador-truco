import { useState } from 'react'
import CounterBoard from "./CounterBoard";

export const Game =() => {

    const [points,setPoints] = useState({we:0,they:0})

    const handlerNosotrosOnMax = () => {
        console.log('gano nosotros')
      }
    return ( 
        <div className="flex flex-row text-white gap-4">
        <CounterBoard title="Nosotros" onChangePoints={handlerNosotrosOnMax} points={points.we} />
        {/* <CounterBoard title="Ellos" /> */}
      </div>
     );
}