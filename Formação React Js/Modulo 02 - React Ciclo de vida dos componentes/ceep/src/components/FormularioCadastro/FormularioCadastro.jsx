import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  

  constructor(props)
  {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
  }

  _handleMundancaTitulo(event){
    event.stopPropagation();
    this.titulo = event.target.value;
  }
  _handleMundancaTexto(event){
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }
  
  render() {
    return (
      <form 
        className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}
      >
        <select 
          className="form-cadastro_input" 
          onChange={this._handleMudancaCategoria.bind(this)}>
            <option >Sem Categoria</option>
            {this.props.categorias.map(categoria => {
              return <option>{categoria}</option>
            })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMundancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMundancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
