import {useState} from 'react'

const useHandleInputChange = () => {
    const [state,setState]= useState({})
    const handleInputChange = (e)=>{
        const {name,value}= e.target;
        console.log({name,value})
        setState(previouseState =>{
            return{...previouseState,[name]:value}
        })
    }
    return {state, handleInputChange}
}

export default useHandleInputChange
