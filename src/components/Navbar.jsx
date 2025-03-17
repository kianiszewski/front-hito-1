import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand text-warning fw-bold">CABLESPACE</Link>

      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/categoria/monitores" className="nav-link">MONITORES</Link></li>
          <li className="nav-item"><Link to="/categoria/controladores" className="nav-link">CONTROLADORES</Link></li>
          <li className="nav-item"><Link to="/categoria/microfonos" className="nav-link">MICROFONOS</Link></li>
          <li className="nav-item"><Link to="/categoria/accesorios" className="nav-link">ACCESORIOS</Link></li>
          <li className="nav-item"><Link to="/usados" className="nav-link">USADOS</Link></li>
          <li className="nav-item"><Link to="/nuevos" className="nav-link">NUEVOS</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link">TODO</Link></li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        {user ? (
          <>
            <Link to="/crear-publicacion" className="btn btn-outline-light me-2">+ Publicar</Link>
            <Link to="/profile" className="btn btn-warning me-2">Perfil</Link>
            <Link to="/cart" className="btn btn-warning me-2">🛒 Carrito</Link>
            <button onClick={logout} className="btn btn-danger">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-warning me-2">Login</Link>
            <Link to="/register" className="btn btn-warning">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
