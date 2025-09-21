import axios from "axios";
import { useState, useEffect } from "react";

export default function Api()
{
    const [data, setData] = useState([])

    useEffect( () => {
        const traerDatos = async () => {
            try {const productos = await axios.get("http://149.50.159.21:8154/api/Products")
                setData(productos.data)
            }
            catch(error){console.log("error", error)}
        }
        traerDatos();
    }, [])
    
    console.log(data)
    
    return (<div></div>)
}