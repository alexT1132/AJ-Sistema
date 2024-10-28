import { createContext, useContext } from "react";


const corteContext = createContext();

export const useCorte = () => {
    const context = useContext(corteContext);

    if (!context) {
        throw new Error("useCorte must be used within a CorteProvider");
    }

    return context;
}

export function CorteProvider({ children }) {

    

    return (
        <corteContext.Provider value={{
            
        }}>
            {children}
        </corteContext.Provider>
    );
}