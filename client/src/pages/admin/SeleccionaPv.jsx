import { useEffect, useState } from 'react'
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useFicha } from "../../context/FichasContext";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";

function SeleccionaPv() {

    const {getFichas, fichas} = useFicha();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const location = useLocation();

    const { dato } = location.state || {};

    const unicos = [...new Set(fichas)];

    useEffect(() => {
        getFichas();
    }, []);

  return (
    <div>
        <Topbar />
        <Sidebar />
        <div className="main">
            <div className="corte-btns">
                {
                    unicos
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((unico) => unico.localidad === dato)
                    .map((unico) => {
                        return (
                            <Button variant="contained">{unico.pv}</Button>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SeleccionaPv