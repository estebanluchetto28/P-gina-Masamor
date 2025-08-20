import Titulo from "./Título"

import logo from "../Imágenes/Logo versiones/Masamor_logo_a-caja.png"
import semillas from "../Imágenes/frutos-contacto.png"

export default function Contacto(){
    return <footer>
        <div id="contacto">
            <Titulo nombre={"Contacto"}/>
            <p><span>Instagram:</span> @masamor.ok </p>
            <p><span>Whatsapp:</span> +54 9 11 3294-8632 </p>
            <p><span>E-mail:</span> masamor@gmail.com  </p>
            <p><span>Ubicación:</span> Tosso 216, San Vicente </p>
        </div>
        <div id="contacto-imagenes">
            <img id="contacto-logo" src={logo} alt="" />
            <img id="semillas-img" src={semillas} alt="" />
        </div>
    </footer>
}