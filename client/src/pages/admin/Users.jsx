import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import UsersTable from "../../components/UsersTable";

function Users() {
  return (
    <div className='container-dash'>
        <Topbar />
        <Sidebar />
        <div className="main">
            <UsersTable />
        </div>
    </div>
  )
}

export default Users