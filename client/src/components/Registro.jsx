import * as React from 'react';
import { useEffect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Registro() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
      } = useForm();
    
      const { signup, errors: registerErrors } = useAuth();
    
      const onSubmit = handleSubmit( async (values) => {
        signup(values);
        navigate('/dashboard');
      });

      const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
          <Typography component="h1" variant="h3">
            Registro
          </Typography>
          {registerErrors.map((error) => {
              <div className="alert-register">
                {error}
              </div>;
            })}
          <Box component="form" onSubmit={onSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              label="Nombre completo"
              required
              {...register("nombre", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Puesto"
              required
              {...register("puesto", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="No. Trabajador"
              required
              {...register("no_trabajador", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Contraseña"
              required
              {...register("contraseña", { required: true })}
            />
            <FormControl fullWidth margin='normal'>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...register("role", { required: true })}
                value={age}
                label="Age"
                onChange={handleChange}
                required
                >
                <MenuItem disabled value='' >Selecciona una opción</MenuItem>
                <MenuItem value='Administrador'>Administrador</MenuItem>
                <MenuItem value='Trabajador'>Trabajador</MenuItem>
                </Select>
            </FormControl>
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