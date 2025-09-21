import { useState } from 'react'

import './Pagina-productos.css'

import Header from '../components/Header'
import GrillaProductos from '../components/GrillaProductos'
import Titulo from '../components/Título'
import Contacto from '../components/Contacto'

import { ALIMENTOS } from '../Productos-info'

export default function PaginaProductos() {
  const [filtro, setFiltro] = useState(null)
  const [busqueda, setBusqueda] = useState("");

  function buscar(){
    const resultado = [];
    ALIMENTOS.map((item, index) => {
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ? resultado.push(index) : null
    })
    return resultado
  }

  function filtrar(){
    const filtrados = [];
    ALIMENTOS.map((item, index) => (
      item[filtro] === true ? filtrados.push(index) : null
    ))
    return filtrados
  }

  function restablecer(){
    setFiltro(null)
    setBusqueda("")
  }

  function devolverProductos(){
    if (busqueda !== "" || filtro)
    {
      if(busqueda !== ""){
        return <GrillaProductos items={buscar()} />
      } else {
        return <GrillaProductos items={filtrar()} />
      }
    } 
    else {
      return(
      <>
        <Titulo nombre={"Panes"} />
        <GrillaProductos items={[3, 2, 1]} />
        <Titulo nombre={"Budines"} />
        <GrillaProductos items={[4, 5, 6, 11, 10]} />
        <Titulo nombre={"Masas Dulces"} />
        <GrillaProductos items={[0, 7, 8, 9]} />
      </>
      )
    }
  }

  return (
    <>
      <Header />
      <section className="Pagina-productos" style={{paddingTop: "90px"}}>
        <div className='filtros'>
          <h2> FILTROS: </h2>
          <button onClick={() => {
            setFiltro("vegano")
          }} > Apto para veganos </button>
          <button onClick={() => {
            setFiltro("celiaco")
          }}> Apto para celíacos </button>
          <button onClick={() => {
            setFiltro("recomendado")
          }}> Recomendados </button>
          <button id='restablecer' onClick={restablecer}> Restablecer </button>
          <input id = "buscador"
            type="text"
            placeholder="Escribe para buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border rounded-lg p-2 w-full mb-4"
          />
        </div>
        {devolverProductos()}
      </section>
      <Contacto />
    </>
  )
}

// 
// dotnet run

// postman

//sql server managment studio

//ecommerce pasaantes