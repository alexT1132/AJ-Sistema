import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispositivo } from "../context/DispositivosContext";


function DispositivosAdd() {

    const defaultTheme = createTheme();

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const { createDispositivo } = useDispositivo();

    const onSubmit = handleSubmit( async (values) => {
        createDispositivo(values);
        navigate('/dispositivos');
      });

  return (
    <div className="container-dash">
        <Topbar />
        <Sidebar />
        <div className="main">
        <br />
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Añadir información
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              label="Equipo"
              required
              {...register("equipos", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Canal"
              required
              {...register("canal", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Usuario"
              required
              {...register("usuario", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Contraseña"
              required
              {...register("contraseña", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Direccion IP"
              required
              {...register("ip", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Encargado 1"
              required
              {...register("encargado_1", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Encargado 2"
              required
              {...register("encargado_2", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Telefono"
              required
              {...register("telefono", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Ubicaión"
              required
              {...register("ubicacion", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Referencia"
              required
              {...register("referencia", { required: true })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
        </div>
    </div>
  )
}

export default DispositivosAdd