import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setColor } from '../../store/color/actions'
 
export default function Color() {
    const {color} = useSelector((state)=>state.color)
    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch(setColor(e.target.value))
        
    }
    
    const textShouldBeWhite = (color) => color.replace("#",'').split('').shift() < 8
    return (
        <div style={{width:"100vw",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:color,height:"50vh",color:textShouldBeWhite(color)?"#fff":"#000"}}>
            <h1>Background Color : {color}</h1>
            <div>

        
            <input onChange={onChange} value={color} type="color"/>
            
            </div>
        </div>
    )
}
