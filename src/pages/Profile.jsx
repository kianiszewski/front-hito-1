import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container text-white mt-5">
      <h2 className="text-center">
        Bienvenido, <span className="text-warning">{user?.nombre}</span>
      </h2>
      <div className="d-flex justify-content-center mt-4">
        <div className="bg-dark p-4 rounded w-50 text-center">
          <button className="btn btn-warning w-100 mb-2" onClick={() => navigate("/profile/personal")}>
            Información Personal
          </button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => navigate("/profile/payment-methods")}>
            Métodos de Pago
          </button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => navigate("/profile/addresses")}>
            Direcciones
          </button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => navigate("/profile/notifications")}>
            Notificaciones
          </button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => navigate("/profile/mis-publicaciones")}>
            Mis Publicaciones
          </button>
          <button className="btn btn-outline-warning w-100 mb-2" onClick={() => navigate("/profile/mis-compras")}>
            Mis Compras 🛒
          </button>
          <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
