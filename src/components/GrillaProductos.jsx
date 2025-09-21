import { ALIMENTOS } from "../Productos-info"

import Producto from "./Item"

export default function GrillaProductos({items}){
    return <div className="productos-grilla">
        {items.map((item, index) => (
            <Producto key={index} alimento={ALIMENTOS[item]} id={item}/>
        ))}
    </div>
}