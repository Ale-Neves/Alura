import React from "react";
import {Button,TextField, Switch, FormControlLabel } from "@material-ui/core/";

function FormularioCadastro() {
  return (
    <form>
      <TextField variant="outlined" id="nome" label="Nome"  fullWidth="true" margin="normal"/>
      <TextField variant="outlined" id="sobrenome" label="Sobrenome" fullWidth="true" margin="normal"/>
      <TextField variant="outlined" id="cpf" label="CPF" fullWidth="true" margin="normal"/>

      <FormControlLabel control={<Switch name="promocoes" defaultChecked color="primary"/>} label="Promoções" />
      <FormControlLabel control={<Switch name="novidades" defaultChecked color="primary"/>} label="Novidades" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
