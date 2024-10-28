import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import RegistroForm from "../../components/Registro";

function Register() {
  return (
    <div className="container-dash">
      <Topbar />
      <Sidebar />
      <RegistroForm />
    </div>
  )
}

export default Register