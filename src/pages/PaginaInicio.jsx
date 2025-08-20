import "./Pagina-inicio.css"
import Header from "../components/Header"
import Productos from '../components/Productos'
import Informacion from '../components/Informacion'
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
      <Informacion />
    </>
  )
}

  
