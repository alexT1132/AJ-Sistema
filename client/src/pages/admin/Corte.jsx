import { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useLocalidad } from "../../context/LocalidadContext";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Corte() {

    const {getLocalidades, localidades} = useLocalidad();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    useEffect(() => {
        getLocalidades();
      }, []);

        const handleClick = (dato) => {
            navigate('/selecciona-pv', { state: {dato} });
            // console.log(dato);
        };

  return (
    <div>
        <Topbar />
        <Sidebar />
        <div className="main">
            <div className="sectionBtnLocalidades">
                <div className="corte-btns">
                    {
                        localidades
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((localidad) => {
                            return (
                                <Button key={localidad._id} onClick={() => handleClick(localidad.nombre)} variant="contained">{localidad.nombre}</Button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Corte