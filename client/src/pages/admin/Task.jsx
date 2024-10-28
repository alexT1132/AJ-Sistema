import { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useTask } from "../../context/TasksContext";
import TaskCard from "../../components/TaskCard";
import { Link } from "react-router-dom";

function Task() {

    const { getTasks, tasks } = useTask();

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

    useEffect(() => {
        getTasks();
    }, []);

  return (
    <div className="container-dash">
        <Topbar />
        <Sidebar />
        <div className="main">
            <div className="table">
                <div className="table_header">
                    <p>Pendientes</p>
                <div>
                    <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" />
                    <Link to="/añadir-pendiente">
                        <button className="add_new">+ Añadir</button>
                    </Link> 
                </div>
            </div>
          <div className="cards">
            {results.map((task) => (
              <TaskCard task={task} key={task._id} />
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Task