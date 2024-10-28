import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useTask } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";


const defaultTheme = createTheme();

export default function TasksForm() {

    const navigate = useNavigate();

    const {createTask} = useTask();

    const {
        register,
        handleSubmit,
      } = useForm();
        
      const onSubmit = handleSubmit( async (values) => {
        createTask(values);
        navigate('/pendientes');
      });

  return (
    <div className="main">
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
          <Box component="form" onSubmit={onSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              label="Titulo"
              required
              {...register("titulo", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Ubicacion"
              required
              {...register("ubicacion", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Descripcion"
              required
              multiline
              rows={4}
              {...register("descripcion", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              style={{display: 'none'}}
              label="completado"
              value='no'
              {...register("completado", { required: true })}
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
  );
}