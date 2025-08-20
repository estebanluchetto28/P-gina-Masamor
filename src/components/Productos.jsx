import { Link } from "react-router-dom"

import Titulo from "./Título"
import GrillaProductos from "./GrillaProductos"

// import imagen from "../Imágenes/Banner_sin-degradado.png"
import { alimentos } from "../Productos-info"


export default function Productos(){
    return(
        <section className="productos">
            <Titulo nombre={"Nuestros Productos"} centrado/>
            <GrillaProductos items={[0,1,4,3,5,2,6,7]} />
            <Link to="/productos"><button>Ver Más</button></Link>
        </section>
    )
}