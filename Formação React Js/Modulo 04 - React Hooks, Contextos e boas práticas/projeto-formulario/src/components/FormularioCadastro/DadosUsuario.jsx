import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha:{valido:true, texto:""}});
    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros)
        {
            if(!erros[campo].valido)
                return false;
        }
        return true;
    }

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar())
                aoEnviar({email,senha});
        }}>
            <TextField
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}
                id="email" 
                label="email" 
                type="email" 
                name="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />

            <TextField 
                value={senha}
                onChange={(event)=>{
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                id="senha"
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="senha" 
                type="password"        
                variant="outlined"
                margin="normal"
                name="senha"
                required
                fullWidth
            />

            <Button 
                variant="contained" 
                color="primary"
                type="submit"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;