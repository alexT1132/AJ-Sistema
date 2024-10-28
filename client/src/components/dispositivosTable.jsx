import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispositivo } from "../context/DispositivosContext";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'equipos', label: 'Equipos', minWidth: 100 },
    { id: 'canal', label: 'Canal', minWidth: 170 },
    { id: 'usuario', label: 'Usuario', minWidth: 170 },
    { id: 'contraseña', label: 'Contraseña', minWidth: 170 },
    { id: 'ip', label: 'Direccion ip', minWidth: 170 },
    { id: 'encargado1', label: 'Encargado 1', minWidth: 170 },
    { id: 'encargado2', label: 'Encargado 2', minWidth: 170 },
    { id: 'telefono', label: 'Telefono', minWidth: 170 },
    { id: 'ubicacion', label: 'Ubicación', minWidth: 170 },
    { id: 'referencia', label: 'Referencia', minWidth: 170 },
    { id: 'acciones', label: 'Acciones', minWidth: 170 },
  ];

function dispositivosTable() {

    const { dispositivos, getDispositivos, deleteDispositivo } = useDispositivo();

    const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = dispositivos;
  } else {
    results = dispositivos.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getDispositivos();
  }, []);

  return (
    <div className="table">
      <div className="table_section">
      <div className="table_header">
            <p>Dispositivos</p>
            <div>
                <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" />
                <Link to='/añadir-dispositivo'>
                    <button className="add_new">+ Añadir</button>
                </Link> 
            </div>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, textAlign: 'center' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((dispositivo, index) => {
                return (
                  <tr key={dispositivo._id}>
                    <td>{index + 1}</td>
                    <td>{dispositivo.equipos}</td>
                    <td>{dispositivo.canal}</td>
                    <td>{dispositivo.usuario}</td>
                    <td>{dispositivo.contraseña}</td>
                    <td>{dispositivo.ip}</td>
                    <td>{dispositivo.encargado_1}</td>
                    <td>{dispositivo.encargado_2}</td>
                    <td>{dispositivo.telefono}</td>
                    <td>{dispositivo.ubicacion}</td>
                    <td>{dispositivo.referencia}</td>
                    <td>
                      <button onClick={() => {deleteDispositivo(dispositivo._id)}} style={{border: 'none', background: 'none'}}>
                        <MdDelete style={{color: 'red', fontSize: 25}} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={dispositivos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      </div>
    </div>
  )
}

export default dispositivosTable