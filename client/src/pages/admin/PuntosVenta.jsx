import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import PuntosVentaTable from "../../components/PuntosVentaTable";

function PuntosVenta() {
  return (
    <div>
        <Topbar />
        <Sidebar />
        <div className="main">
            <PuntosVentaTable />
        </div>
    </div>
  )
}

export default PuntosVenta