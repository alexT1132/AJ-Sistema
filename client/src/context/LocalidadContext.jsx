import { createContext, useContext, useState } from "react";
import { 
    createLocalidadRequest,
    getLocalidadesRequest,
    deleteLocalidadRequest,
    getLocalidadRequest,
 } from "../api/localidad.js";

const localidadContext = createContext();

export const useLocalidad = () => {
    const context = useContext(localidadContext);

    if (!context) {
        throw new Error("useLocalidades must be used within a LocalidadProvider");
    }

    return context;
}

export function LocalidadProvider({ children }) {

    const [localidades, setLocalidades] = useState([]);

    const getLocalidades = async () => {
        try {
            const res = await getLocalidadesRequest();
            setLocalidades(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createLocalidad = async (localidad) => {
        try {
            const res = await createLocalidadRequest(localidad);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteLocalidad = async (id) => {
        try {
            const res = await deleteLocalidadRequest(id);
            if (res.status === 204) setLocalidades(localidades.filter((localidad) => localidad._id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const getLocalidad = async (id) => {
        try {
            const res = await getLocalidadRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <localidadContext.Provider value={{
            localidades,
            getLocalidades,
            getLocalidad,
            createLocalidad,
            deleteLocalidad,
        }}>
            {children}
        </localidadContext.Provider>
    );
}