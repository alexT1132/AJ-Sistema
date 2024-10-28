import React from 'react'

function TableSectionOne() {

  const columns = [
    { id: 'HRS', label: 'HRS', minWidth: 100 },
    { id: 'F-Entregadas', label: 'F-Entregadas', minWidth: 170 },
    { id: 'puesto', label: 'Puesto', minWidth: 100 },
    { id: 'no_trabajador', label: 'No. Trabajador', minWidth: 100 },
    { id: 'role', label: 'Role', minWidth: 100 },
    { id: 'acciones', label: 'Acciones', minWidth: 100 },
  ];

  return (
    <div>
      <h3>Registro de ventas mensuales</h3>
    </div>
  )
}

export default TableSectionOne