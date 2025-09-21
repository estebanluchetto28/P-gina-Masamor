import "./Pagina-inicio.css"

import Header from "../components/Header"
import Productos from '../components/Productos'
import Contacto from "../components/Contacto"
import Titulo from "../components/Título"

import Api from "../components/api.jsx"

import video1 from "../Imágenes/video-banner.mp4"

export default function PaginaInicio(){
  return (
    <>
      <Header inicio/>
      <div id="banner">
        <video autoPlay loop muted src={video1} alt=""/>
        <h1>Nuestro ingrediente principal es el amor</h1>
      </div>
      <Productos />
      <section id="informacion">
        <div className="informacion-bloques">
            <Titulo nombre={"Horarios"} centrado/>
            <p> Nuestro local esta abierto de 8:00 a 19:00hs de lunes a viernes y domingo. </p>
        </div>
        <div className="informacion-bloques">
            <Titulo nombre={"Pedidos"} centrado/>
            <p> Podés hacer tus pedidos a CABA con 1 día de anticipación dentro del horario abierto del local.  </p>
        </div>
      </section>
      <Api></Api>
      <Contacto />
    </>
  )
}

  
