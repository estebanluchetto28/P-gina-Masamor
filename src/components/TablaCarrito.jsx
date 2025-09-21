import { use } from "react"

import { CarritoContext } from "../store/carrito-context";

export default function TablaCarrito({ checked, envioPrecio }){
    const { carrito, añadirAlCarrito, restarDelCarrito} = use(CarritoContext)

    let totalCantidad = 0;
    let totalPrecio = 0;

    for (let i = 0; i < carrito.length; i++) {
        totalCantidad += carrito[i].cantidad
        totalPrecio += carrito[i].precio * carrito[i].cantidad
    }

    if (checked === "envio a domicilio") {
        totalPrecio += envioPrecio
    }

    return(
      <>
      {totalCantidad > 0 ? <table style={{margin: "20px 0px"}}>
        <thead>
          <tr>
            <th>PRODUCTOS</th>
            <th style={{width: "55px"}}>CANT.</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item, index) => (
            item.cantidad > 0 &&
              <tr key={index}>
                <td>{item.nombre + " "}{item.version ? item.version.toLowerCase() : ""}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio}</td>
                <td style={{width: "10px", backgroundColor: "transparent"}}>
                  <button onClick={() => restarDelCarrito(item.nombre, item.version)}>-</button>
                </td>
                <td style={{width: "10px", backgroundColor: "transparent"}}>
                  <button onClick={() => añadirAlCarrito(item.nombre, item.version)}>+</button>
                </td>
              </tr>
          ))}
          {checked === "envio a domicilio" &&
            <tr>
              <td style={{backgroundColor: "#9AAA3D", color: "#A4412A"}}>Envío a domicilio</td>
              <td style={{backgroundColor: "#9AAA3D", color: "#A4412A"}}></td>
              <td style={{backgroundColor: "#9AAA3D", color: "#A4412A"}}>${envioPrecio}</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th>{totalCantidad}</th>
            <th>${totalPrecio}</th>
          </tr>
        </tfoot>
      </table> : <h3 style={{justifySelf: "center"}}> Aún no hay productos en el carrito</h3>}
    </>
)}