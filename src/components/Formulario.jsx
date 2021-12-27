
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({contactos, setContactos, contacto, setContacto}) => {
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    // para controlar el error
    const [error, setError] = useState(false);

    
    // HACEMOS UN USEEFECT - PARA CUANDO EL CONTACTO ESTE LISTO OSEA AGREGADO O CAMBIADO
    useEffect(() => {      
        // VER SI EL OBJETO CONTACTO TIENE ALGO
        if(Object.values(contacto).length > 0){
            const {nombre, numero} = contacto;
            // VER REALMENTE LO QUE HACE
            setNombre(nombre);
            setNumero(numero);
        }
    }, [contacto])

    // FUNCION PARA GENERAL EL ID
    const generarId = () => {
        return Math.random().toString().substring(2) + Date.now().toString();
    }

    const objetoContacto = {
        nombre,
        numero
    };   

    // cuando demos click en boton agregar
    const handleSubmit = (e) => {
        e.preventDefault();
        // VALIDAMOS LOS DATOS
        if([nombre,numero].includes('')){
            setError(true); 
            return; //sale de la funcion         
        }
        
        setError(false); 

        // PARA EDITAR
        if(contacto.id){
            // LE PASAMOS EL CONTACTO ID AL OBJETOCONTACTO
            objetoContacto.id = contacto.id;
            // retorna el objetoContacto si item.id es igual al contacto.id
            // sino retornam el item el valor actual en el array
            const contactoActualizado = contactos.map( item => item.id === contacto.id ? objetoContacto : item );
            // SETEAMOS LOS CONTACTOS
            setContactos(contactoActualizado);

            // REGRESAMOS EL CONTACTO A UN OBJETO VACIO PARA QUE NO SE ALMACENE EN MEMORIA
            setContacto({});
        }else{
            // AGREGAMOS EL CONTACTO
            objetoContacto.id = generarId();
            setContactos([...contactos, objetoContacto]);
        }        
        
        // LIMPIAMOS LOS INPUTS
        setNombre('');
        setNumero('');
    }
    

    return (
        <div className="md:w-1/2 mx-5 mb-5">
            <form action="#" className="bg-white p-5 rounded-md shadow-xl" onSubmit={handleSubmit}>

                {error && <Error mensaje='TODOS LOS CAMPOS SON OBLIGATORIOS'/>}

            <div className="mt-5">
                <label className="font-bold" htmlFor="nombre">NOMBRE:</label>
                <input className="w-full py-3 px-5 border-2" type="text" name="nombre" id="nombre" placeholder="Nombre del contacto" value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
            </div>

            <div className="mt-5">
                <label className="font-bold" htmlFor="numero">NUMERO DE CONTACTO:</label>
                <input className="w-full py-3 px-5 border-2" type="number" name="numero" id="numero" placeholder="Numero del contacto" value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>

            <input type="submit" className="bg-slate-700 py-3  mt-5 w-full rounded-md text-white font-bold hover:bg-green-400 cursor-pointer" value={contacto.id ? 'EDITAR CONTACTO' : 'AGREGAR CONTACTO'} />

            </form>
        </div>
    )
}

export default Formulario
