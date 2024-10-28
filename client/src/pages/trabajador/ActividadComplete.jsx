import * as React from 'react';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useTask } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ActividadComplete() {

    const navigate = useNavigate();

    const params = useParams();

    const {register, setValue, handleSubmit} = useForm();

    const { getTask, updateTask } = useTask();

    const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    // Función para obtener la fecha y hora actual en formato YYYY-MM-DDTHH:MM
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses de 0-11
      const day = String(now.getDate()).padStart(2, '0'); // Días de 1-31
      const hours = String(now.getHours()).padStart(2, '0'); // Horas de 0-23
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos de 0-59
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    // Establecer la fecha y hora actual en el estado
    setDateTime(getCurrentDateTime());
  }, []);

    useEffect(() => {
        async function loadTask() {
            if(params.id){
                const pendiente = await getTask(params.id);
                setValue("titulo", pendiente.titulo);
                setValue("ubicacion", pendiente.ubicacion);
                setValue("descripcion", pendiente.descripcion);
            }
        }
        loadTask();
    });

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
        }
        navigate("/actividades");
      });
    
  return (
    <div>
        <Navbar />
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
        <Typography textAlign='center' mt={18} component="h1" variant="h3">
            ¿Deseas finalizar esta actividad?
        </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate>
            <TextField
            style={{display: 'none'}}
              margin="normal"
              fullWidth
              required
              {...register("titulo", { required: true })}
            />
            <TextField
            style={{display: 'none'}}
              margin="normal"
              fullWidth
              required
              {...register("ubicacion", { required: true })}
            />
            <TextField
            style={{display: 'none'}}
              margin="normal"
              fullWidth
              required
              {...register("descripcion", { required: true })}
            />
            <TextField
            style={{display: 'none'}}
              margin="normal"
              fullWidth
              type='datetime-local'
              value={dateTime}
              {...register("fecha")}
            />
            <TextField
            style={{display: 'none'}}
              margin="normal"
              fullWidth
              required
              value='si'
              {...register("completado", { required: true })}
            />
            <Button
              style={{background: '#116f00'}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Finalizar
            </Button>
          </Box>
        </Box>
      </Container>
        </ThemeProvider>
    </div>
  );
}