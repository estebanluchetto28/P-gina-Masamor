import { useParams } from 'react-router-dom'
import { useState, useRef, use } from 'react'

import './Pagina-item.css'

import Header from '../components/Header'
import Titulo from '../components/Título'
import StyledCheckbox from '../components/StyledCheckbox'
import Modal from '../components/Modal'

import { CarritoContext } from '../store/carrito-context'
import { ALIMENTOS } from "../Productos-info"

export default function PaginaItem() {
  const {añadirAlCarrito} = use(CarritoContext)
  
  const [seleccionado, setSeleccionado] = useState(null);
  const modalRef = useRef()

  const id = useParams().id
  const {nombre, precio, img, ingredientes, info, versiones, celiaco, vegano, recomendado} = ALIMENTOS[id]

  function comprobarSeleccion(){
    if(seleccionado || versiones == false){
      añadirAlCarrito(nombre, seleccionado, precio);
    } else{
      modalRef.current.mostrar("Por favor, selecciona una de las opciones del producto")
    }
  }

  return (
    <>
      <Header />
      <Modal ref={modalRef} />
      <section className='Pagina-item'>
        <Titulo nombre={nombre} centrado/>
        <div className='grilla-info-item'>
          <div>
            <img id='foto-item' src={img} alt="" />
            <br />
            {versiones.map((item, index) => (
              <StyledCheckbox 
                key={index} 
                checked={seleccionado === versiones[index]}
                onChange={() => setSeleccionado(seleccionado === versiones[index] ? null : versiones[index])}>
                  {item}
              </StyledCheckbox>))}
          </div>
          <div>
            {recomendado ? <p style={{color: "#A4412A", fontWeight: "700"}}> Recomendado! </p> : null}
            <p>{info}</p>
            <p>Ingredientes: <br /> {ingredientes}</p>
            {celiaco ? <p style={{backgroundColor: "#9AAA3D",}}> Apto para Celíacos </p> : null}
            {vegano ? <p style={{backgroundColor: "#9AAA3D"}}> Apto para Veganos </p> : null}
            <h3>${precio}</h3>
            <button className='boton-agregar' onClick={comprobarSeleccion} > Agregar al carrito </button>
          </div>
        </div>
      </section>
    </>
  )
}