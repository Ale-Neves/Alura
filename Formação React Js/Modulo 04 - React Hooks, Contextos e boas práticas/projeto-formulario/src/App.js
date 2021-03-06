import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core/"
import '@fontsource/roboto';
import {validarCPF, validarSenha, validarNome} from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography style={{marginTop: "29px"}} align="center" component="h1" variant="h3">Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider 
          value={{cpf:validarCPF, senha:validarSenha, nome:validarNome}}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
}
export default App;
