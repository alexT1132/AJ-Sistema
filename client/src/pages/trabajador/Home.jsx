import Navbar from "../../components/Navbar";
import { BiTask } from "react-icons/bi";
import { FaTicketAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useTask } from "../../context/TasksContext";
import { Link } from "react-router-dom";

function Home() {

    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
    }, []);

  return (
    <div>
      <Navbar />
      <div className="cards-trabajador">
        <Link to='/actividades' style={{textDecoration: 'none'}}>
            <div className='card'>
                <div className="card-content">
                    <div className="number">{tasks.length}</div>
                    <div className="card-name">Actividades</div>
                </div>
                <div className="icon-box">
                    <BiTask style={{fontSize: 50, color: '#0E50BC'}} />
                </div>
            </div>
        </Link>
        <div className='card'>
            <div className="card-content">
                <div className="number" >1111</div>
                <div className="card-name">Fichas</div>
            </div>
            <div className="icon-box">
                <FaTicketAlt style={{fontSize: 50, color: '#0E50BC'}} />
            </div>
        </div>
        <div className='card'>
            <div className="card-content">
                <div className="number" >1111</div>
                <div className="card-name">prueba</div>
            </div>
            <div className="icon-box">
                icono
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home