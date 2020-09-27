import React, {useState, createContext} from 'react'

export const inputContext = createContext();

export function ContextProvider(props) {
    const [inputs,setInputs] = useState([])
    
    return (
        <inputContext.Provider value={[inputs,setInputs]}>
            {props.children}
        </inputContext.Provider>
    )
}
