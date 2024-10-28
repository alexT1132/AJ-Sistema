import * as React from 'react';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useFicha } from "../context/FichasContext";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocalidad } from "../context/LocalidadContext";


const defaultTheme = createTheme();

export default function FichasForm() {

  const [localidad, setLocalidad] = useState('');

    const navigate = useNavigate();

    const {createFichas} = useFicha();

    const { localidades, getLocalidades, } = useLocalidad();

    const {
        register,
        handleSubmit,
      } = useForm();
        
      const onSubmit = handleSubmit((values) => {
        createFichas(values);
        navigate('/fichas');
      });


      const handleChange = (event) => {
        setLocalidad(event.target.value); // Actualizar el valor seleccionado
      };

    useEffect(() => {
      getLocalidades();
    }, []);

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
          <FormControl fullWidth margin='normal'>
                <InputLabel id="demo-simple-select-label">Localidad</InputLabel>
                <Select
                id="demo-simple-select"
                {...register("localidad", { required: true })}
                value={localidad}
                label="Localidad"
                onChange={handleChange}
                >
                {localidades.map((local) => {
                  return (
                    <MenuItem value={local.nombre} key={local._id}>{local.nombre}</MenuItem>
                  )
                })}
                </Select>
            </FormControl>
            <TextField
              margin="normal"
              fullWidth
              label="Punto de venta"
              required
              {...register("pv", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Recibió"
              required
              {...register("recibio", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 1 Hora"
              required
              {...register("hrs1", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 3 Horas"
              required
              {...register("hrs3", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 5 Horas"
              required
              {...register("hrs5", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 10 Horas"
              required
              {...register("hrs10", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 25 Horas"
              required
              {...register("hrs25", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 7 dias"
              required
              {...register("d7", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Fichas de 30 dias"
              required
              {...register("d30", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Responsable"
              required
              {...register("responsable", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Nombre del tecnico"
              required
              {...register("tecnico", { required: true })}
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