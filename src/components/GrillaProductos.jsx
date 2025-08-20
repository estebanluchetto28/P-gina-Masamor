import { alimentos } from "../Productos-info"

import Producto from "./Item"

export default function GrillaProductos({items}){
    return <div className="productos-grilla">
        {items.map((item,index) => (
            <Producto key={index} alimentos={alimentos[item]} id={item}/>
        ))}
    </div>
}