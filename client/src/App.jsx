import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UsersContext";
import { TaskProvider } from "./context/TasksContext";
import { DispositivoProvider } from "./context/DispositivosContext";
import { LocalidadProvider } from "./context/LocalidadContext";
import { FichaProvider } from "./context/FichasContext";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/admin/Dashboard";
import RegisterPage from "./pages/admin/Register";
import UsersPage from "./pages/admin/Users";
import HistoryPage from "./pages/admin/Historial";
import DisposotivosPage from "./pages/admin/dispositivos";
import AddDispositivo from "./components/DispositivosAdd";
import TaskPage from "./pages/admin/Task";
import TaskForm from "./pages/admin/TaskForm";
import HomePage from "./pages/trabajador/Home";
import ActividadesPage from "./pages/trabajador/Actividades";
import ActividadComplete from "./pages/trabajador/ActividadComplete";
import ProtectedRoute from "./ProtectedRoute";
import FichasPage from "./pages/admin/Fichas";
import FichasFormPage from "./pages/admin/FichasForm";
import PuntoVentaPage from "./pages/admin/PuntosVenta";
import PuntoVentaAdd from "./components/PuntoVentaAdd";
import SeleccionaPv from "./pages/admin/SeleccionaPv";
import Corte from "./pages/admin/Corte";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <LocalidadProvider>
          <FichaProvider>
            <DispositivoProvider>
              <TaskProvider>
                <BrowserRouter>
                  <Routes>

                    <Route path="/" element={<LoginPage />} />

                    <Route element={<ProtectedRoute />}>
                      {/* Dashboard Administrador */}
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/registro" element={<RegisterPage />} />
                      <Route path="/usuarios" element={<UsersPage />} />
                      <Route path="/historial" element={<HistoryPage />} />
                      <Route path="/dispositivos" element={<DisposotivosPage />} />
                      <Route path="/añadir-dispositivo" element={<AddDispositivo />} />
                      <Route path="/pendientes" element={<TaskPage />} />
                      <Route path="/añadir-pendiente" element={<TaskForm />} />
                      <Route path="/fichas" element={<FichasPage />} />
                      <Route path="/fichas-add" element={<FichasFormPage />} />
                      <Route path="/localidades" element={<PuntoVentaPage />} />
                      <Route path="/localidades-add" element={<PuntoVentaAdd />} />
                      <Route path="/corte" element={<Corte />} />
                      <Route path="/selecciona-pv" element={<SeleccionaPv />} />

                      {/* Dashboard Trabajador */}
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/actividades" element={<ActividadesPage />} />
                      <Route path="/Actividades/:id" element={<ActividadComplete />} />

                    </Route>

                  </Routes>
                </BrowserRouter>
              </TaskProvider>
            </DispositivoProvider>
          </FichaProvider>
        </LocalidadProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;