import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function Dashboard() {
  return (
    <div className="container-dash">
        <Topbar />
        <Sidebar />
        <div className="main">

        </div>
    </div>
  )
}

export default Dashboard