import { useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ ref }) {
    const [mostrar, setMostrar] = useState(false);
    const [texto, setTexto] = useState("");

    useImperativeHandle(ref, () => ({
        mostrar(mensaje) {
            setMostrar(true)
            setTexto(mensaje)
        }
    }))

    if (!mostrar) return null;

    return createPortal( 
        <div className="alerta">
            <div className="alerta-contenido">
                <p>{texto}</p>
                <button onClick={() => setMostrar(false)}> Cerrar </button>
            </div>
        </div>, document.getElementById("modal-root")
    )
}
    