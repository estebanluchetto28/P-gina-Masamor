import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Hook de React Router: devuelve información de la URL actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que cambie "pathname" (o sea, la ruta), sube al tope de la página
    window.scrollTo(0, 0);
  }, [pathname]); // <- el efecto se dispara cuando cambia la ruta

  return null;
}