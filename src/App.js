import logo from './logo.svg';
import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      usuario: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e){
    // 
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    // Evitar que cambie el recurso
    e.preventDefault()
    console.log(this.state)
    fetch("http://localhost:8081/usuario/agregarUsuario", {
      method: 'POST',
      body: JSON.stringify({
        usuario: this.state.usuario,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'appication/json'
      }
    }).then(() => {
      console.log('Lo logre')
    })
  }


  render(){
    console.log(this.state)
    return(
      <div className='App'>
        <div className = 'card'>
          <div className = 'card-header'>
            <p>Esto es una prueba</p>
          </div>
          <div className = 'card-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input type = "text" name = "usuario" onChange={this.handleInput} placeholder='Escribir usuario'/>
              </div>
              <div className='form-group'>
                <input type = "password" name = "password" onChange={this.handleInput} placeholder='Escribir password'/>
              </div>
              <button type='submit'>Agregar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
