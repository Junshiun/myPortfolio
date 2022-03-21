/* not in use
import { useContext, createContext, useReducer} from "react";
import { stateReducer } from './reducer'

export const visible = createContext();

export const Context = ({children}) => {

    const [state, statedispatch] = useReducer(stateReducer, {
        me: false, 
        you: false
    })

    return (
        <visible.Provider value={{state, statedispatch}}>
            {children}
        </visible.Provider>
    )
}

export const VisibleContext = () => {
    return useContext(visible)
}
*/