import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import TasksForm from "../../components/TasksForm";

function TaskForm() {
  return (
    <div className="container-dash">
      <Topbar />
      <Sidebar />
      <TasksForm />
    </div>
  )
}

export default TaskForm