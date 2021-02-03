import { DECREASE_NUMBER, INCREASE_NUMBER, SET_NUMBER } from "./constants"

export const increaseNumber = () => ({type:INCREASE_NUMBER})
export const decreaseNumber = () => ({type:DECREASE_NUMBER})
export const setNumber = (number) => ({type:SET_NUMBER,payload:{number}})