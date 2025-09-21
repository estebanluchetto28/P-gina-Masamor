import { Routes, Route } from "react-router-dom"

import PaginaInicio from "./pages/PaginaInicio"
import PaginaNosotros from "./pages/PaginaNosotros"
import PaginaProductos from "./pages/PaginaProductos"
import PaginaCarrito from "./pages/PaginaCarrito"
import PaginaItem from "./pages/PaginaItem"

import CarritoContextProvider from "./store/carrito-context"

export default function App() {
  return (
    <CarritoContextProvider>
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/nosotros" element={<PaginaNosotros />} />
      <Route path="/productos" element={<PaginaProductos />} />
      <Route path="/carrito" element={<PaginaCarrito />} />
      <Route path="/item/:id" element={<PaginaItem/>}/>
    </Routes>
    </CarritoContextProvider>
  )
}
