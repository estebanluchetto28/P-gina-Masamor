import { Link } from "react-router-dom"

import pepas from "../Imágenes/Banner_sin-degradado.png"
import panIntegral from "../Imágenes/Alimentos/pan-integral-sin-semillas.jpg"
import panBlanco from "../Imágenes/Alimentos/pan-blanco.jpg"
import budinVainilla from "../Imágenes/Alimentos/budin-vainilla.jpg"
import budinChocolate from "../Imágenes/Alimentos/budin-chocolate.jpg"
import budinLimon from "../Imágenes/Alimentos/budin-limon.jpg"
import berlinesas from "../Imágenes/Alimentos/berlinesas.jpg"
import facturaSingluten from "../Imágenes/Alimentos/facturas-variadas-sin-gluten.jpg"
import facturas from "../Imágenes/Alimentos/facturas-variadas.jpg"
import budinChocolateSingluten from "../Imágenes/Alimentos/budin-chocolate-sin-gluten.jpg"
import budinVainillaSingluten from "../Imágenes/Alimentos/budin-vainilla-sin-gluten.jpg"
import panMasaMadre from "../Imágenes/Alimentos/pan-de-masa-madre.jpg"


const imagenes = [pepas, panIntegral, panBlanco, panMasaMadre, budinVainilla, budinChocolate, budinLimon, berlinesas, facturas, facturaSingluten, budinVainillaSingluten, budinChocolateSingluten]

export default function Producto({ alimentos, id }){
    return <Link to={`/item/${id}`} className="item">
            <div id="img-item"
                style={{backgroundImage: `url(${imagenes[id]})`}}>
            </div>
            <h3>{alimentos.nombre} <br /> ${alimentos.precio} </h3>
        </Link>
}

// linear-gradient(rgba(164, 65, 42, 0.2), rgba(164, 65, 42, 0.55))
// PONER CUANDO THIAGO NO SE DE CUENTA