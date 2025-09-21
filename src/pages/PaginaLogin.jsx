import { useRef } from 'react'

import StyledInput from '../components/StyledInput'

export default function PaginaLogin({modalRef, setUserInfo, iniciarSesion}){

    const nombreRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();
    const direccionRef = useRef();

    function guardarInfoUsuario(){
        if(comprobarDatos()){
            setUserInfo({
                nombre: nombreRef.current.value(),
                email: emailRef.current.value(),
                telefono: telefonoRef.current.value(),
                direccion: direccionRef.current.value()
            })
        }
    }
    
    function comprobarDatos(){
        if(nombreRef.current.comprobar() && emailRef.current.comprobar() && telefonoRef.current.comprobar() && direccionRef.current.comprobar()){
            modalRef.current.mostrar("Usted se ha registrado correctamente")
            return true
        }
        else{
           
            return false
        }
    }

    return <div style={{justifyItems: 'center'}}>
        <div>
            <h2>Datos Personales</h2>
            <div className='inputs'>
                <StyledInput ref={nombreRef} regex={/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/} type="text"> Nombre completo </StyledInput>
                <StyledInput ref={emailRef} regex={/^[^\s@#*]+@[^\s@#*]+\.[^\s@#*]+$/} required> E-mail </StyledInput>
            </div>
            <div className='inputs'> 
                <StyledInput ref={telefonoRef} regex={/^\d{8,}$/} type="text"> Teléfono </StyledInput>
                <StyledInput ref={direccionRef} regex={/^\S+$/} type="text"> Dirección </StyledInput>
            </div>
            <button onClick={guardarInfoUsuario} style={{fontSize: "25px", color: "#FFC77A", marginTop: "20px"}}>
                Iniciar sesión
            </button>
        </div>
    </div>
    
}