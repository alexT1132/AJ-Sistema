import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import FichasFormulario from "../../components/FichasForm";

function FichasForm() {
  return (
    <div className="container-dash">
      <Topbar />
      <Sidebar />
      <FichasFormulario />
    </div>
  )
}

export default FichasForm