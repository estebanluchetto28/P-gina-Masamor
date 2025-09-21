import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext({
    carrito: [],
    añadirAlCarrito: () => {},
    restarDelCarrito: () => {},
});

// const carritoInicial = alimentos.flatMap(item => (item.versiones == [] ? {nombre: item.nombre, precio: item.precio, cantidad: 0} : item.versiones.map(
//   version => ({nombre: item.nombre + " " + version.toLowerCase(), precio: item.precio, cantidad: 0}
// ))))

export default function CarritoContextProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
    const guardado = sessionStorage.getItem("carrito");
    if (!guardado) return [];
        return JSON.parse(guardado);
    });

    useEffect(() => {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    // FUNCIONES QUE USABAMOS ANTES

    // function añadirAlCarrito(nombre) {
    //   setCarrito(prevCarrito =>
    //     prevCarrito.map(item =>
    //       item.nombre === nombre
    //         ? { ...item, cantidad: item.cantidad + 1, precio: item.precio}
    //         : item
    //     )
    //   );
    // }

    // function actualizarCantidad(nombre, operacion) {
    //   setCarrito(prevCarrito =>
    //     prevCarrito.map(item =>
    //       item.nombre === nombre
    //         ? { ...item, cantidad: operacion === "mas" ? item.cantidad + 1 : item.cantidad - 1, precio: item.precio}
    //         : item
    //     )
    //   );
    // }

    function añadirAlCarrito(nombre, version = "", precio) {
        setCarrito(prevCarrito => {
        const index = prevCarrito.findIndex(
            item => item.nombre === nombre && item.version === version
        );
        if (index !== -1) {
            return prevCarrito.map((item, i) =>
            i === index
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            );
        } else {
            return [...prevCarrito, { nombre: nombre, version: version, precio: precio, cantidad: 1 }];
        }
    })}

    function restarDelCarrito(nombre, version) {
        setCarrito(prevCarrito =>
        prevCarrito
            .map(item =>
            item.nombre === nombre && item.version === version
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            )
            .filter(item => item.cantidad > 0)
        );
    }
    
    const carritoContextValue = {
        carrito: carrito,
        añadirAlCarrito: añadirAlCarrito,
        restarDelCarrito: restarDelCarrito,
    }

    return (
        <CarritoContext value={carritoContextValue}>
            {children}
        </CarritoContext>
    )
}