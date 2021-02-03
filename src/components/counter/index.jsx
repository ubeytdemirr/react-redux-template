import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setNumber,increaseNumber,decreaseNumber } from '../../store/counter/actions'

export default function Counter() {
    const {number} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch(setNumber(parseInt(e.target.value)))
    }
    const inc = () => {
        dispatch(increaseNumber())
    }
    const dec = () => {
        dispatch(decreaseNumber())
    }
    return (
        <div style={{width:"100vw",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"50vh"}}>
            <h1>Bit Counter</h1>
            <div>

            <button onClick={inc}>+</button>
            <input onChange={onChange} value={number} type="number"/>
            <button onClick={dec}>-</button>
            </div>
        </div>
    )
}
