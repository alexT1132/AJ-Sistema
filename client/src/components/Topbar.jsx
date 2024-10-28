import React from 'react'
import { FaUserCircle } from "react-icons/fa";


function Topbar() {
  return (
    <div className="topBar">
        <div className="logo">
            <h2>Administrador</h2>
        </div>
        <div className="search">
            <input type="hidden" id="search" placeholder="Search here" />
        </div>
        <div className="user">
            <FaUserCircle className="img" />
        </div>
    </div>
  )
}

export default Topbar