import { useTask } from "../context/TasksContext";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";

function TaskCard({ task }) {

  return (
    <div className='card'>
      <div className="card-content">
        <div className="number" >{task.titulo}</div>
        <div className="card-name">{task.ubicacion}</div>
        <div className="card-name">{task.descripcion}</div>
        <div className="card-name" >{new Date(task.fecha).toLocaleDateString()}</div>
      </div>
      <div className="icon-box">
        <Link to={`/actividades/${task._id}`}>
            <button style={{background: '#87eb75', border: 'none'}} >
                <CheckIcon style={{fontSize: 35, color: '#117100    '}} />
            </button>
        </Link>
      </div>
    </div>
  )
}

export default TaskCard