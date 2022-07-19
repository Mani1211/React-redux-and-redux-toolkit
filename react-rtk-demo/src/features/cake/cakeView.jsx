import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
const CakeView = () => {

    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
     
    const dispatch = useDispatch()

    return (
    <div>
        <h2>Number Of Cakes - {numberOfCakes} </h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Reorder</button>
    </div>
  )
}

export default CakeView