import { useState, useEffect, useRef, use } from 'react'

import './Pagina-carrito.css'

import PaginaLogin from './PaginaLogin'
import Header from '../components/Header'
import StyledCheckbox  from '../components/StyledCheckbox'
import TablaCarrito from '../components/TablaCarrito'
import Modal from '../components/Modal'

import { CarritoContext } from '../store/carrito-context'

const envioPrecio = 5500

export default function PaginaCarrito() {
  const {carrito} = use(CarritoContext);

  const modalRef = useRef();

  const [userInfo, setUserInfo] = useState(() => {
    const guardado = sessionStorage.getItem("userInfo");
    return guardado ? JSON.parse(guardado) : {};
  })
  
  const [checked, setChecked] = useState(() => sessionStorage.getItem("checked") || null);

  useEffect(() => {
    sessionStorage.setItem("checked", checked);
  }, [checked]);

  useEffect(() => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
  }, [userInfo])

  function realizarCompra(){
    if (carrito.length === 0) {
      modalRef.current.mostrar("El carrito está vacío")
    } else {
      modalRef.current.mostrar("La compra se ha realizado con éxito")
    }
  }
  
  return (
    <>
      <Modal ref={modalRef} />
      <Header/>
      <section className='pagina-carrito'>
        {userInfo.nombre
        ?
        <div>
          <h2 style={{textAlign: 'center'}}>Información de la compra</h2>
          <TablaCarrito carrito={carrito} checked={checked} envioPrecio={envioPrecio}/>
          <StyledCheckbox 
            checked={checked === "envio a domicilio"}
              onChange={() => setChecked("envio a domicilio")}>
              Envío a domicilio (${envioPrecio})
          </StyledCheckbox >
          <StyledCheckbox  
            checked={checked === "retirar en el local"}
            onChange={() => setChecked("retirar en el local")}>
              Retirar en el local (sin costo)
          </StyledCheckbox>
          <br/>
          <button
            onClick={realizarCompra} 
            style={{fontSize: "22px", color: "#FFC77A", marginTop: "20px"}}>
            Realizar compra
          </button>
        </div>
        :
        <PaginaLogin modalRef={modalRef} userInfo={userInfo} setUserInfo={setUserInfo}/>
        }
        
      </section>
    </>
  )
}


// export default function Pago() {
//   const [email, setEmail] = useState("");
//   const [monto, setMonto] = useState(5000); // por defecto 50 USD

//   const handlePago = async () => {
//     const res = await fetch("http://localhost:4000/create-checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, amount: monto }),
//     });

//     const data = await res.json();
//     window.location.href = data.url; // redirige al checkout de Stripe
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Generar Pago</h2>

//       <input
//         type="email"
//         placeholder="Correo del usuario"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 rounded w-full mb-2"
//       />

//       <input
//         type="number"
//         placeholder="Monto en centavos (5000 = 50.00)"
//         value={monto}
//         onChange={(e) => setMonto(Number(e.target.value))}
//         className="border p-2 rounded w-full mb-2"
//       />

//       <button
//         onClick={handlePago}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Pagar
//       </button>
//     </div>
//   );
// }
