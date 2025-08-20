import Titulo from "./Título"

export default function Informacion(){
    return <section id="informacion">
        <div id="informacion-bloques">
            <Titulo nombre={"Horarios"} centrado/>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde eius similique repellendus consequuntur. Earum itaque, similique, animi debitis eveniet </p>
        </div>
        <div id="informacion-bloques">
            <Titulo nombre={"Pedidos"} centrado/>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde eius similique repellendus consequuntur. Earum itaque, similique, animi debitis eveniet </p>
        </div>
           </section>
}