import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core/"
import '@fontsource/roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" component="h1" variant="h3">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11)
    return {valido:false, texto:"CPF deve ter 11 digitos!"}
  else
  return {valido:true, texto:""}
}

export default App;
