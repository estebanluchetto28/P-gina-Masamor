export default function Titulo({nombre, centrado}){
    return <div className="titulo" style={centrado ? {justifySelf: "center"} : {justifySelf: "left"}}>
        <h1>{nombre}</h1>
        <hr className="subrayado"/>
    </div>
}