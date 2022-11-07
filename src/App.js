import './App.css';
import React, { useState } from 'react';
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
  //useState de lista de colaboradores con carga inicial de los tres primeros colaboradores
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

  //useState de nombre y correo
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

  //Función para capturar nombre
  const valorNombre = (e)=>{
    setNombre(e.target.value)
  }

  //Función para capturar correo
  const valorCorreo = (e)=>{
    setCorreo(e.target.value)
  }

  return (
    <div className="App">
<div>
  <label>Nombre</label>
  <input onChange={valorNombre}></input>
  <p>{nombre}</p>
  <label>Correo</label>
  <input onChange={valorCorreo}></input>
  <p>{correo}</p>
  </div>    
  <ul>
        {listaColaboradores.map(colaborador => <li key={colaborador.id}>
          <strong>Nombre: </strong>{colaborador.nombre} - <strong>Correo: </strong>{colaborador.correo}</li>)}
      </ul>
    </div>
  );
}

export default App;
