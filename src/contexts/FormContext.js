import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [ todos, setTodos ] = useState([])
    const [ isChanged, setIsChanged ] = useState(false)

    const values = {
        todos,
        setTodos,
        isChanged, 
        setIsChanged
    }

    return <FormContext.Provider value={values}>{ children }</FormContext.Provider>
}

export const useForm = () => useContext(FormContext)