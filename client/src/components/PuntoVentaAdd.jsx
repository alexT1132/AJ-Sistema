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
import { useLocalidad } from "../context/LocalidadContext";


function PuntoVentaAdd() {

    const defaultTheme = createTheme();

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const { createLocalidad } = useLocalidad();

    const onSubmit = handleSubmit( async (values) => {
        createLocalidad(values);
        navigate('/localidades');
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
            mt: 10
          }}
        >
          <Typography component="h1" variant="h4">
            Añadir información
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate>
          <br />
            <TextField
              margin="normal"
              fullWidth
              label="Nombre de la localidad"
              required
              {...register("nombre", { required: true })}
            />
            <br />
            <br />
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

export default PuntoVentaAdd