import pepas from "./Imágenes/Banner_sin-degradado.png"
import panIntegral from "./Imágenes/Alimentos/pan-integral-sin-semillas.jpg"
import panBlanco from "./Imágenes/Alimentos/pan-blanco.jpg"
import budinVainilla from "./Imágenes/Alimentos/budin-vainilla.jpg"
import budinChocolate from "./Imágenes/Alimentos/budin-chocolate.jpg"
import budinLimon from "./Imágenes/Alimentos/budin-limon.jpg"
import berlinesas from "./Imágenes/Alimentos/berlinesas.jpg"
import facturaSingluten from "./Imágenes/Alimentos/facturas-variadas-sin-gluten.jpg"
import facturas from "./Imágenes/Alimentos/facturas-variadas.jpg"
import budinChocolateSingluten from "./Imágenes/Alimentos/budin-chocolate-sin-gluten.jpg"
import budinVainillaSingluten from "./Imágenes/Alimentos/budin-vainilla-sin-gluten.jpg"
import panMasaMadre from "./Imágenes/Alimentos/pan-de-masa-madre.jpg"

export const ALIMENTOS = [
        {
            nombre: "Pepas",
            precio: 3000,
            img: pepas,
            ingredientes: "Harina de trigo, Aceite de girasol, Azúcar, Huevo, Dulce de membrillo, Polvo de hornear",
            info: "Disfrutá de las mejores pepas de San Vicente, hechas totalmente a mano y con mucho amor!",
            versiones: ["Membrillo", "Batata", "Dulce de Leche"],
            celiaco: false,
            vegano: false,
            recomendado: false,
        },
        {
            nombre: "Pan Integral",
            precio: 5000,
            img: panIntegral,
            ingredientes: "Harina de trigo integral, Agua, Levadura, Sal, Azúcar ",
            info: "Disfrutá del mejor pan integral de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con semillas", "Sin semillas"],
            celiaco: false,
            vegano: true,
            recomendado: true,
        },
        {
            nombre: "Pan Blanco",
            precio: 3000,
            img: panBlanco,
            ingredientes: "Harina de trigo, Agua, Levadura, Sal, Azúcar",
            info: "Disfrutá del mejor pan blanco de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con semillas", "Sin semillas"],
            celiaco: false,
            vegano: true,
            recomendado: false,
        },
        {
            nombre: "Pan masa madre",
            precio: 5000,
            img: panMasaMadre,
            ingredientes: "Harina de trigo, Agua, Sal",
            info: "Disfrutá del mejor pan de masa madre de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con semillas", "Sin semillas"],
            celiaco: false,
            vegano: true,
            recomendado: true,
        },
        {
            nombre: "Budín de Vainilla",
            precio: 3000,
            img: budinVainilla,
            ingredientes: "Harina de trigo, Huevo, Azúcar, Aceite de girasol, Esencia de vainilla, polvo de hornear",
            info: "Disfrutá del mejor budín de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con glaseado", "Sin glaseado"],
            celiaco: false,
            vegano: false,
            recomendado: false,
        },
        {
            nombre: "Budín de Chocolate",
            precio: 3000,
            img: budinChocolate,
            ingredientes: "Harina de trigo, Huevo, Azúcar, Aceite de girasol, Cacao amargo en polvo, polvo de hornear",
            info: "Disfrutá del mejor budín de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: [],
            celiaco: false,
            vegano: false,
            recomendado: true,
          
        },
        {
            nombre: "Budín de Limón",
            precio: 3000,
            img: budinLimon,
            ingredientes: "Harina de trigo, Huevo, Azúcar, Aceite de girasol, Ralladura de limón, polvo de hornear",
            info: "Disfrutá del mejor budín de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con glaseado", "Sin glaseado"],
            celiaco: false,
            vegano: false,
            recomendado: true,
        },
        {
            nombre: "Berlinesas",
            precio: 4000,
            img: berlinesas,
            ingredientes: "Harina de trigo, Agua, Huevo, Manteca, Azúcar, Esencia de vainilla",
            info: "Disfrutá de las mejores berlinesas de San Vicente, hechas totalmente a mano y con mucho amor!",
            versiones: ["Con glaseado", "Sin glaseado"],
            celiaco: false,
            vegano: false,
            recomendado: false,

        },
        {
            nombre: "Facturas",
            precio: 5000,
            img: facturas,
            ingredientes: "Harina de trigo, Agua, Huevo, Manteca, Azúcar, Esencia de vainilla",
            info: "Disfrutá de las mejores facturas de San Vicente, hechas totalmente a mano y con mucho amor!",
            versiones: ["Con pastelera", "Con dulce de leche", "Medialunas de grasa", "Medialunas de manteca"],
            celiaco: false,
            vegano: false,
            recomendado: false,
            
        },
        {
            nombre: "Facturas sin gluten",
            precio: 5000,
            img: facturaSingluten,
            ingredientes: "Premezcla sin gluten, Agua, Huevo, Manteca, Azúcar, Esencia de vainilla",
            info: "Disfrutá de las mejores facturas sin gluten de San Vicente, hechas totalmente a mano y con mucho amor!",
            versiones: ["Con pastelera", "Con dulce de leche", "Medialunas de grasa", "Medialunas de manteca"],
            celiaco: true,
            vegano: false,
            recomendado: false,
        },
        {
            nombre: "Budín de vainilla sin gluten",
            precio: 3000,
            img: budinVainillaSingluten,
            ingredientes: "Premezcla sin gluten, Huevo, Azúcar, Aceite de girasol, Ralladura de limón, polvo de hornear",
            info: "Disfrutá del mejor budín de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: ["Con glaseado", "Sin glaseado"],
            celiaco: true,
            vegano: false,
            recomendado: false,
        },
        {
            nombre: "Budín de Chocolate sin gluten",
            precio: 3000,
            img: budinChocolateSingluten,
            ingredientes: "Premezcla sin gluten, Huevo, Azúcar, Aceite de girasol, Ralladura de limón, polvo de hornear",
            info: "Disfrutá del mejor budín de San Vicente, hecho totalmente a mano y con mucho amor!",
            versiones: [],
            celiaco: true,
            vegano: false,
            recomendado: true,
        },
    ]