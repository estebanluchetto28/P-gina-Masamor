import { Link } from "react-router-dom"

export default function Producto({ alimento, id }){
    const { nombre, precio, img } = alimento

    return <Link to={`/item/${id}`} className="item">
            <div id="img-item"
                style={{backgroundImage: `url(${img}`}}>
            </div>
            <h3>{nombre} <br /> ${precio} </h3>
        </Link>
}

// linear-gradient(rgba(164, 65, 42, 0.2), rgba(164, 65, 42, 0.55))
// PONER CUANDO THIAGO NO SE DE CUENTA