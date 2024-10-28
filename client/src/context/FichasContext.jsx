import { createContext, useContext, useState } from "react";
import { 
    getFichasRequest,
    createFichaRequest,
    deleteFichaRequest,
    getFichaRequest
 } from "../api/fichas.js";

const fichaContext = createContext();

export const useFicha = () => {
    const context = useContext(fichaContext);

    if (!context) {
        throw new Error("useFicha must be used within a FichaProvider");
    }

    return context;
}

export function FichaProvider({ children }) {

    const [fichas, setFichas] = useState([]);

    const getFichas = async () => {
        try {
            const res = await getFichasRequest();
            setFichas(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createFichas = async (f) => {
        try {
            const res = await createFichaRequest(f);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteFichas = async (id) => {
        try {
            const res = await deleteFichaRequest(id);
            if (res.status === 204) setFichas(fichas.filter((ficha) => ficha._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const getDispositivo = async (id) => {
        try {
            const res = await getDispositivoRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <fichaContext.Provider value={{
            fichas,
            getFichas,
            createFichas,
            deleteFichas,
        }}>
            {children}
        </fichaContext.Provider>
    );
}