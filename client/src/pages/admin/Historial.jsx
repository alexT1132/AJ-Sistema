import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import HistoryTable from "../../components/histotyTable";

function Historial() {
  return (
    <div className="container-dash">
        <Topbar />
        <Sidebar />
        <div className="main">
          <HistoryTable />
        </div>
    </div>
  )
}

export default Historial