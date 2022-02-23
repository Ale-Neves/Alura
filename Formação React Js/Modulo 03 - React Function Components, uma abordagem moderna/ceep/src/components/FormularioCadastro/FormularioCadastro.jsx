import React, {useState} from "react";
import {Button,TextField, Switch, FormControlLabel } from "@material-ui/core/";

function FormularioCadastro() {
  const [nome,setNome] = useState("Alexandre");
  const [sobrenome,setSobrenome] = useState("Neves");
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);

      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          
          if(tmpNome.length >= 3)
            tmpNome = setNome(tmpNome.substring(0,3));
          
          setNome(tmpNome);
        }}
        variant="outlined"
        id="nome"
        label="Nome"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }} 
        variant="outlined" 
        fullWidth
        id="sobrenome" 
        label="Sobrenome" 
        margin="normal"
      />

      <TextField variant="outlined" id="cpf" label="CPF" fullWidth margin="normal"/>

      <FormControlLabel 
        control={<Switch name="promocoes" defaultChecked color="primary"/>} 
        label="Promoções"
      />
      <FormControlLabel 
        control={<Switch name="novidades" defaultChecked color="primary"/>} 
        label="Novidades" 
      />

      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
