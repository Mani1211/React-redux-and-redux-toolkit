import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
const IceCreamView = () => {

    const numberOfIceCreams= useSelector((state)=>state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of Ice Creams - {numberOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Ice Creams</button>
        <button onClick={()=>dispatch(restocked(2))}>Reorder  Ice Creams</button>
    </div>
  )
}

export default IceCreamView