import { FaKey, FaUsers, FaServer, FaTicketAlt, FaPowerOff } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdDashboard, MdHistory } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {

    const { logout } = useAuth();

  return (
    <div className="sideBar">
            <ul>
                <li>
                    <Link to='/dashboard'>
                        <MdDashboard className="i" />
                        <div>Dashboard</div>    
                    </Link>
                </li>
                <li>
                    <Link to='/registro'>
                            <FaKey className="i" />
                            <div>Autenticacion</div>
                    </Link>
                </li>
                <li>
                    <Link to='/usuarios'>
                            <FaUsers className="i" />
                            <div>Usuarios</div>
                    </Link>
                </li>
                <li>
                    <Link to='/historial'>
                            <MdHistory className="i" />
                            <div>Historial</div>
                    </Link>
                </li>
                <li>
                    <Link to='/dispositivos'>
                            <FaServer className="i" />
                            <div>Dispositivos</div>
                    </Link>
                </li>
                <li>
                    <Link to='/localidades'>
                            <IoLocationSharp className="i" />
                            <div>Localidades</div>
                    </Link>
                </li>
                <li>
                    <Link to='/fichas'>
                            <FaTicketAlt className="i" />
                            <div>Fichas</div>
                    </Link>
                </li>
                <li>
                    <Link to='/pendientes'>
                            <BiTask className="i" />
                            <div>Pendientes</div>
                    </Link>
                </li>
                <li>
                    <Link to='/' onClick={() => {logout()}}>
                            <FaPowerOff className="i" />
                            <div>Cerrar session</div>
                    </Link>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar