import { Link } from "react-router-dom";

function Cart() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", minHeight: "100vh", color: "#fff" }}>
      <h2>Carrito de Compras</h2>
      <p>
        Tu carrito está vacío. <Link to="/categoria/todo" style={{ color: "#FFD700" }}>Ver productos</Link>
      </p>
    </div>
  );
}

export default Cart;
