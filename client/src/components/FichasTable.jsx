import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useFicha } from "../context/FichasContext";
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
    { id: 'localidad', label: 'Localidad', minWidth: 150 },
    { id: 'pv', label: 'Punto de venta', minWidth: 150 },
    { id: 'recibio', label: 'Recibió', minWidth: 200 },
    { id: 'hrs1', label: '1 Hrs', minWidth: 80 },
    { id: 'hrs3', label: '3 Hrs', minWidth: 80 },
    { id: 'hrs5', label: '5 Hrs', minWidth: 80 },
    { id: 'hrs10', label: '10 Hrs', minWidth: 80 },
    { id: 'hrs25', label: '25 Hrs', minWidth: 80 },
    { id: 'd7', label: '7 D', minWidth: 80 },
    { id: 'd30', label: '30 D', minWidth: 80 },
    { id: 'responsable', label: 'Responsable', minWidth: 200 },
    { id: 'tecnico', label: 'Tecnico', minWidth: 200 },
    { id: 'fecha', label: 'Fecha', minWidth: 150 },
    { id: 'acciones', label: 'Acciones', minWidth: 150 },
  ];

function dispositivosTable() {

    const { fichas, getFichas, deleteFichas } = useFicha();

    const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = fichas;
  } else {
    results = fichas.filter((dato) =>
      dato.pv.toLowerCase().includes(search.toLocaleLowerCase())
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
    getFichas();
  }, []);

  return (
    <div className="table">
      <div className="table_section">
      <div className="table_header">
            <p>Registro de fichas</p>
            <div>
                <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" />
                  <Link to='/fichas-add'>
                      <button className="add_new">+ Añadir</button>
                  </Link> 
                  <Link to='/corte' style={{marginLeft: '10px'}}>
                      <button className="add-corte">Realizar corte</button>
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
              .map((ficha, index) => {
                return (
                  <tr key={ficha._id}>
                    <td>{index + 1}</td>
                    <td>{ficha.localidad}</td>
                    <td>{ficha.pv}</td>
                    <td>{ficha.recibio}</td>
                    <td>{ficha.hrs1}</td>
                    <td>{ficha.hrs3}</td>
                    <td>{ficha.hrs5}</td>
                    <td>{ficha.hrs10}</td>
                    <td>{ficha.hrs25}</td>
                    <td>{ficha.d7}</td>
                    <td>{ficha.d30}</td>
                    <td>{ficha.responsable}</td>
                    <td>{ficha.tecnico}</td>
                    <td>{new Date(ficha.fecha).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => {deleteFichas(ficha._id)}} style={{border: 'none', background: 'none', cursor: 'pointer'}}>
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
        count={fichas.length}
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