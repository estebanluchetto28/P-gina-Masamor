import { useState } from 'react'

import './Pagina-productos.css'

import Header from '../components/Header'
import GrillaProductos from '../components/GrillaProductos'
import Titulo from '../components/Título'

import { alimentos } from '../Productos-info'

export default function PaginaProductos() {
  const [filtrados, setFiltrados] = useState([])
  const [filtrosLimpios, setFiltrosLimpios] = useState(true)

  function flitrar(filtro){
    setFiltrados([])
    setFiltrosLimpios(false)
    alimentos.map((item, index) => (
    item[filtro] === true ? setFiltrados(prev => [...prev, index]) : null
  ))}

  return (
    <>
      <Header />
      <section className="Pagina-productos" style={{paddingTop: "90px"}}>
        <div className='filtros'>
          <h2> FILTROS: </h2>
          <button onClick={() => flitrar("vegano")} > Apto para veganos </button>
          <button onClick={() => flitrar("celiaco")}> Apto para celíacos </button>
          <button onClick={() => flitrar("nutritivos")}> Opciones nutritivas </button>
          <button onClick={() => setFiltrosLimpios(true)}> Reestablecer </button>
        </div>
      { filtrosLimpios ?  
      <>
        <Titulo nombre={"Panes"} />
        <GrillaProductos items={[3,2,1]} />
        <Titulo nombre={"Budines"} />
        <GrillaProductos items={[4,5,6,10,11]} />
        <Titulo nombre={"Masas Dulces"} />
        <GrillaProductos items={[0, 7, 8, 9]} />
      </>
      : 
      <GrillaProductos items={filtrados} />
      }
      </section>
    </>
  )
}

// return (
//     <>
//       <Header />
//       <section className="Pagina-productos" style={{paddingTop: "90px"}}>
//         <h1>FILTROS: </h1>
//         <button onClick={}> Apto para veganos </button>
//         <button> Apto para celíacos </button>
//         <button> Opciones saludables </button>
//         <Titulo nombre={"Panes"} />
//         <GrillaProductos items={[1,2,1,0]} />
//         <Titulo nombre={"Budines"} />
//         <GrillaProductos items={[1,2,1,0]} />
//         <Titulo nombre={"Galletitas"} />
//         <GrillaProductos items={[1,2,1,0]} />
//       </section>
//     </>
//   )