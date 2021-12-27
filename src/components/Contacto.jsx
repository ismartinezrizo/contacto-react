
const Contacto = ({contacto, setContacto, eliminarContacto}) => {
    // DESTRUCTURAR EL OBJETO CONTACTO, QUE ES EL QUE TRAEMOS AL RECORRER EL ARRAY CONTACTOS EN LISTA DE CONTACTOS
    const {nombre, numero, id} = contacto; //pasamos id para poder eliminarlo

    const handleEliminar = () => {
        if(confirm('Desea eliminar el contacto?')){
            eliminarContacto(id);            
        }
    }

    return (
        <div className="bg-slate-700 text-white mx-5 p-5 rounded-md text-center mb-5">
            <p className="font-bold">NOMBRE: <span className="text-3xl text-green-300 block">{nombre}</span></p>
            <p className="font-bold">NUMERO DEL CONTACTO: <span className="text-3xl text-green-300 block">{numero}</span>
            </p>
            <div className="flex justify-between">

                <button className="bg-green-300 hover:bg-green-600 py-3 px-5 rounded-md text-black font-bold mt-5"
                 onClick={() => setContacto(contacto)}>EDITAR</button>

                <button className="bg-red-300 hover:bg-red-600 py-3 px-5 rounded-md text-black font-bold mt-5" onClick={handleEliminar}>ELIMINAR</button>
            </div>
        </div>   
    )
}

export default Contacto
