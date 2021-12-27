
import { useState,useEffect } from "react";

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaContacto from "./components/ListaContacto"

function App() {

  const [contactos, setContactos] = useState([]);
  const [contacto, setContacto] = useState({});

  // Se ejecuta una sola vez
  // OBTENEMOS LOS CONTACTOS DE localStorage
  useEffect(() => {
    const obtenerContactoLocalStorage = () => {
      const contactoLocalStorage = JSON.parse(localStorage.getItem('contactos')) ?? []; //sino hay nada agrega []
      //  SETEAMOS LOS CONTACTOS CON LOS CONTACTOS QUE HAY EN EL localStorage
      setContactos(contactoLocalStorage);
    } 

    obtenerContactoLocalStorage();

  },[]); //sin dependencias para que se ejecute una sola vez

  // se ejecuta cuando hay un cambio o cuando se ejecuta algo
  // AGREGAMOS LOS CONTACTOS AL localStorage
  useEffect(() => {
    // JSON.stringify('contactos') --- objeto convertido a string
    localStorage.setItem('contactos', JSON.stringify(contactos));
  },[contactos]);
  

  const eliminarContacto = id => {
    // RECORREMOS LOS CONTACTOS Y LOS FILTRAMOS
    const contactoActualizado = contactos.filter(contacto => contacto.id !== id);
    // SETEAMOS EL CONTACTO
    setContactos(contactoActualizado);
  }

    return(
      <div>
        <Header/>
        <div className="mt-10 md:flex md:justify-center">
          <Formulario 
            contactos={contactos} 
            setContactos={setContactos} 
            contacto={contacto} 
            setContacto={setContacto}
          />
          <ListaContacto 
            contactos={contactos} 
            setContacto={setContacto} 
            eliminarContacto={eliminarContacto} 
          />
        </div>
      </div>      
    )
}

export default App
