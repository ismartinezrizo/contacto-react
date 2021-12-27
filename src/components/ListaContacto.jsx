import Contacto from "./Contacto"

const ListaContacto = ({contactos, setContacto, eliminarContacto}) => {    
    console.log(contactos)
    return (        
        <div className="md:w-1/2 h-screen overflow-y-scroll">
            {/* preguntamos si existen contactos */}
            { contactos.length > 0 ? (
                <div>
                    {/* RECORREMOS LOS CONTACTOS */}
                    { contactos.map(contacto => <Contacto key={contacto.id} contacto={contacto}                         setContacto={setContacto} eliminarContacto={eliminarContacto} />) }
                      
                </div>
                ):(
                <div>
                    <h1 className="text-center font-bold text-2xl text-black bg-white mx-5 py-5 rounded-xl shadow-xl">AGREGUE UN CONTACTO DESDE EL FORMULARIO</h1>
                </div>
                )
            }
        </div>
    )
}

export default ListaContacto
