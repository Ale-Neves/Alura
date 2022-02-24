import React, {useState} from "react";
import {Button,TextField, Switch, FormControlLabel } from "@material-ui/core/";

function FormularioCadastro({aoEnviar}) {

  const [nome,setNome] = useState("Alexandre");
  const [sobrenome,setSobrenome] = useState("Neves");
  const [cpf,setCpf] = useState("451154054");
  const [promocoes,setPromocoes] = useState(true);
  const [novidades,setNovidades] = useState(true);
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
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

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}  
        variant="outlined" 
        id="cpf" 
        label="CPF" 
        fullWidth 
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes" 
            checked={promocoes}
            color="primary"
            />
        } 
        label="Promoções"
      />

      <FormControlLabel 
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }} 
            name="novidades" 
            checked={novidades}
            color="primary"
          />
        } 
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
