import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import DispositivosTable from "../../components/dispositivosTable";

function dispositivos() {
  return (
    <div className="container-dash">
        <Topbar />
        <Sidebar />
        <div className="main">
            <DispositivosTable />
        </div>
    </div>
  )
}

export default dispositivos