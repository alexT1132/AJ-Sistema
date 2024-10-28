import Navbar from "../../components/Navbar";
import TaskCardTrabajador from "../../components/TaskCardTrabajador";
import { useTask } from "../../context/TasksContext";
import { useEffect } from "react";

function Actividades() {

    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
    }, []);

  return (
    <div>
        <Navbar />
        <div className="cards">
            {[tasks.map((task) => (
              <TaskCardTrabajador task={task} key={task._id} />
            ))]}
        </div>
    </div>
  )
}

export default Actividades