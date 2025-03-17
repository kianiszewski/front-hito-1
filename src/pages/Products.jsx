import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔹 Función para obtener un ID único
const generateUniqueId = () => Date.now() + Math.floor(Math.random() * 1000);

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔹 Productos hardcodeados
    const defaultProducts = [
      {
        id_producto: generateUniqueId(),
        nombre: "MALD PARLANTE",
        descripcion: "Parlante de estudio 32BIT FLOAT HQ. Sonido profesional para tu setup.",
        precio: 210,
        stock: 15,
        categoria: "monitores",
        estado: "NUEVO",
        imagenes: [
          "https://imgur.com/wxUGIX8.jpg",
          "https://imgur.com/tGNhS4s.jpg",
          "https://imgur.com/V5HhLV0.jpg",
        ],
      },
      {
        id_producto: generateUniqueId(),
        nombre: "STUDIO MASTER SPEAKER",
        descripcion: "Monitor de estudio Behringer con sonido cristalino y bajos profundos.",
        precio: 320,
        stock: 10,
        categoria: "monitores",
        estado: "NUEVO",
        imagenes: [
          "https://imgur.com/HbLpMWx.jpg",
          "https://imgur.com/1d1QWfs.jpg",
          "https://imgur.com/wcM0dKZ.jpg",
        ],
      },
      {
        id_producto: generateUniqueId(),
        nombre: "RODE MIC STUDIO PRO",
        descripcion: "Micrófono profesional para grabación de alta calidad en estudios.",
        precio: 150,
        stock: 20,
        categoria: "microfonos",
        estado: "NUEVO",
        imagenes: [
          "https://imgur.com/Wj6F1BW.jpg",
          "https://imgur.com/62YYXOo.jpg",
          "https://imgur.com/pxDXMc5.jpg",
        ],
      },
      {
        id_producto: generateUniqueId(),
        nombre: "AUDIO TECHNICA PRO",
        descripcion: "Micrófono versátil para grabación y streaming en calidad HD.",
        precio: 180,
        stock: 25,
        categoria: "microfonos",
        estado: "NUEVO",
        imagenes: [
          "https://imgur.com/m5ZWZCo.jpg",
          "https://imgur.com/WLRnbMu.jpg",
          "https://imgur.com/jd8kLvD.jpg",
        ],
      },
    ];

    // 🔹 Recuperar productos guardados en localStorage
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];

    // 🔹 Solo guardar los productos hardcodeados si `localStorage` está vacío
    if (storedProducts.length === 0) {
      localStorage.setItem("productos", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    } else {
      setProducts(storedProducts);
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-white">Productos Disponibles</h2>
      {products.length === 0 ? (
        <p className="text-white">No hay productos disponibles.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id_producto}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "5px",
                background: "#222",
                color: "#fff",
              }}
            >
              {/* 🔹 Imagen Principal */}
              {product.imagenes?.length > 0 ? (
                <img
                  src={product.imagenes[0]}
                  alt={product.nombre}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              ) : (
                <p className="text-muted">Sin imagen</p>
              )}

              {/* 🔹 Nombre del Producto */}
              <h3 className="mt-2">{product.nombre}</h3>

              {/* 🔹 Descripción del Producto */}
              <p>{product.descripcion}</p>

              {/* 🔹 Estado del Producto */}
              <p className={`fw-bold ${product.estado === "NUEVO" ? "text-success" : "text-danger"}`}>
                Estado: {product.estado}
              </p>

              {/* 🔹 Precio */}
              <p className="fw-bold text-warning">${Number(product.precio).toFixed(2)}</p>

              {/* 🔹 Botón para ver detalles */}
              <Link
                to={`/producto/${product.id_producto}`}
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  padding: "0.5rem",
                  backgroundColor: "#FFD700",
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
