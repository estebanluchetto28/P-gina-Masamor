import './Pagina-nosotros.css'

import Header from '../components/Header'
import Contacto from '../components/Contacto'
import Titulo from '../components/Título'

export default function PaginaNosotros() {
  return (
    <><Header/>
    <div className='nosotros-titulo'> 
      <Titulo nombre="Somos Masamor" centrado/></div>
    <div className='cuerpo-nosotros-1'>
    <h2>Nuestra panadería fue fundada el 10 de mayo de 2025 con el objetivo de darle a nuestros clientes la mejor calidad en alimentos. El nombre surge de un juego de palabras, en el que se hace referencia a la masa y el amor, características que definen totalmente a nuestra panadería.</h2>
    </div>
    <div className='cuerpo-nosotros-2'>
    <h2>Nosotros hacemos todos nuestros alimentos con muchísimo amor, pero también con ingredientes seleccionados de primera calidad que hacen de nuetra comida una opción rica, saludable y artesanal. </h2>
    </div>
      <Contacto />
    </>
  )
}
