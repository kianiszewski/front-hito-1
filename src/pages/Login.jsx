import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "usuario@example.com" && password === "123456") {
      const userData = { nombre: "Kevin", email };
      login(userData, () => navigate("/profile")); // Redirigir después del login
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container text-white mt-5 d-flex justify-content-center">
      <div className="p-4 bg-dark rounded shadow-lg" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Iniciar Sesión</h2>
        <form className="mt-3">
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
          <button className="btn btn-warning w-100" type="button" onClick={handleLogin}>
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
