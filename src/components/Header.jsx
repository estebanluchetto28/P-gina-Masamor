import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import logo from "../Imágenes/Logo versiones/Masamor_logo_horizontal.png"
import carrito from "../imágenes/bolsa-de-compras.png"


export default function Header({inicio})
{
    const [deslizado, setDeslizado] = useState(false)

    if(inicio){
        useEffect( () => {
        const detectarDeslizamiento = () => {
            setDeslizado(window.scrollY > 50); //detecta si bajó más de 50px
        }

        window.addEventListener("scroll", detectarDeslizamiento)

        return () => {
            window.removeEventListener("scroll", detectarDeslizamiento) //quita el event listener para evitar errores
        }
    })
    }
    
    return(
        <>
            <header className={deslizado || !inicio ? "deslizado" : ""}>
                <nav>
                    <ul>
                        <li> <img className="logo-header" src={logo} alt="MASAMOR" /> </li>
                        <li> <Link to="/">Inicio</Link> </li>
                        <li> <Link to="/nosotros" >Nosotros</Link> </li>
                        <li> <Link to="/productos">Productos</Link> </li>
                        <li> <a href="#contacto" >Contacto</a> </li>
                        <li> <Link id="carrito" to="/carrito"> <img src={carrito} alt="carrito-de-compras"/> </Link> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}