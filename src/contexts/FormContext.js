import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [ toDos, setToDos ] = useState([])

    const values = {
        toDos,
        setToDos
    }

    return <FormContext.Provider value={values}>{ children }</FormContext.Provider>
}

export const useForm = () => useContext(FormContext)