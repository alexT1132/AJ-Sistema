import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import FichasTable from "../../components/FichasTable";

function Fichas() {
  return (
    <div>
        <Topbar />
        <Sidebar />
        <div className="main">
          <FichasTable />
        </div>
    </div>
  )
}

export default Fichas