import { useEffect, useState } from "react";
import { useTask } from "../context/TasksContext";
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'titulo', label: 'Titulo', minWidth: 100 },
    { id: 'ubicacion', label: 'Ubicacion', minWidth: 170 },
    { id: 'descripcion', label: 'Descripcion', minWidth: 170 },
    { id: 'fecha', label: 'Fecha', minWidth: 170 },
    { id: 'acciones', label: 'Acciones', minWidth: 170 }
  ];

function HistorialTable() {
  const { tasks, getTasksComplete, deleteTask } = useTask();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = tasks;
  } else {
    results = tasks.filter((dato) =>
      dato.titulo.toLowerCase().includes(search.toLocaleLowerCase())
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
    getTasksComplete();
  }, []);

  return (
    <div className="table">
      <div className="table_header">
        <p>Actividades concluidas</p>
        <div>
          <input
            type="text"
            value={search}
            onChange={searcher}
            className="buscador"
            placeholder="Buscar aqui"
          />
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
              .map((task, index) => {
                return (
                  <tr key={task._id}>
                    <td>{index + 1}</td>
                    <td>{task.titulo}</td>
                    <td>{task.ubicacion}</td>
                    <td>{task.descripcion}</td>
                    <td>{new Date(task.fecha).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => {deleteTask(task._id)}} style={{border: 'none', background: 'none'}}>
                        <MdDelete style={{color: 'red', fontSize: 30}} className="delete" />
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
        count={tasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
    </div>
  );
}

export default HistorialTable;