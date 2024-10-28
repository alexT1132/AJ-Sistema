import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLocalidad } from "../context/LocalidadContext";
import { Link } from "react-router-dom"
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
    { id: 'puntoVenta', label: 'Punto de venta', minWidth: 100 },
    { id: 'acciones', label: 'Acciones', minWidth: 100 },
  ];

function PuntosVentaTable() {

    const { localidades, getLocalidades, deleteLocalidad } = useLocalidad();

    const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = localidades;
  } else {
    results = localidades.filter((dato) =>
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
    getLocalidades();
  }, []);

  return (
    <div className="table">
      <div className="table_section">
      <div className="table_header">
            <p>Localidades</p>
            <div>
                <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" />
                <Link to='/localidades-add'>
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
              .map((localidad, index) => {
                return (
                  <tr key={localidad._id}>
                    <td>{index + 1}</td>
                    <td>{localidad.nombre}</td>
                    <td>
                      <button style={{border: 'none', background: 'none', cursor: 'pointer'}} 
                      onClick={() => deleteLocalidad(localidad._id)}>
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
        count={localidades.length}
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

export default PuntosVentaTable