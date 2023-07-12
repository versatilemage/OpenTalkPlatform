import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    
    const [renderForm, setRenderForm] = useState("");

    const changeSignin = () => {
        setRenderForm("signin")
    }

    const changeSignup = () => {
        setRenderForm("signup")
    }

    const closeAuthForm = () => {
        setRenderForm("")
    }

    const propsData = useMemo(() => ({
        renderForm, changeSignin, changeSignup, closeAuthForm
    }), [renderForm])

    return (
        <AuthContext.Provider value={propsData}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};
