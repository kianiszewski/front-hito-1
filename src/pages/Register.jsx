import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (nombre && email && password) {
      const userData = { nombre, email };
      login(userData, () => navigate("/profile")); // Redirigir después del registro
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="container text-white mt-5 d-flex justify-content-center">
      <div className="p-4 bg-dark rounded shadow-lg" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Registro</h2>
        <form className="mt-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control mb-3"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-warning w-100" type="button" onClick={handleRegister}>
            REGISTRARSE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
