import { useEffect, useState } from "react";
import { useUser } from "../context/UsersContext";
import { MdDelete } from "react-icons/md";
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
    { id: 'nombre', label: 'Nombre', minWidth: 100 },
    { id: 'puesto', label: 'Puesto', minWidth: 170 },
    { id: 'no_trabajador', label: 'No. Trabajador', minWidth: 170 },
    { id: 'role', label: 'Role', minWidth: 170 },
    { id: 'acciones', label: 'Acciones', minWidth: 170 },
  ];

function UsersTable() {
  const { getUsers, users, deleteUser } = useUser();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = users;
  } else {
    results = users.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
    results = users.filter((dato) =>
      dato.puesto.toLowerCase().includes(search.toLocaleLowerCase())
    );
    results = users.filter((dato) =>
      dato.no_trabajador.toLowerCase().includes(search.toLocaleLowerCase())
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
    getUsers();
  }, []);

  return (
    <div className="table">
      <div className="table_section">
      <div className="table_header">
            <p>Usuarios</p>
            <div>
                <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" /> 
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
              .map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.nombre}</td>
                    <td>{user.puesto}</td>
                    <td>{user.no_trabajador}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => {deleteUser(user._id)}} style={{border: 'none', background: 'none'}}>
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      </div>
    </div>
  );
}

export default UsersTable;