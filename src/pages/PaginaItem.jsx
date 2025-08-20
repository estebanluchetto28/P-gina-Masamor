import { useParams } from 'react-router-dom'

import './Pagina-item.css'

import Header from '../components/Header'
import Titulo from '../components/Título'
import { alimentos } from "../Productos-info"

import img from "../Imágenes/Alimentos/berlinesas.jpg"
export default function PaginaItem() {
  const id = useParams().id
  return (
    <>
      <Header />
      <section className='Pagina-item'>
        <Titulo nombre={alimentos[id].nombre} centrado/>
        <div className='grilla-info-item'>
          <div>
            <img src={img} alt="" />
            <br />
            {alimentos[id].versiones.map(item => (<>
            <input type='checkbox' />
            <label>{item}</label>
            </>))}
          </div>
          <div>
            <p>{alimentos[id].info}</p>
            <p>Ingredientes: <br /> {alimentos[id].ingredientes}</p>
            {alimentos[id].celiaco ? <p style={{color: "#9AAA3D"}}> Apto para Celíacos </p> : null}
            {alimentos[id].vegano ? <p style={{color: "#9AAA3D"}}> Apto para Veganos </p> : null}
            <h3>${alimentos[id].precio}</h3>
          </div>
        </div>
      </section>
    </>
  )
}