import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HARD_CODED_PRODUCTS = [
  {
    id_producto: "1742172003649",
    nombre: "MALD PARLANTE",
    descripcion: "Parlante de estudio 32bit Float HQ. Ideal para mezcla y producción profesional.",
    precio: 210.0,
    stock: 15,
    categoria: "monitores",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/wxUGIX8.png",
      "https://imgur.com/tGNhS4s.png",
      "https://imgur.com/V5HhLV0.png",
    ],
  },
  {
    id_producto: "1742172004462",
    nombre: "STUDIO MASTER SPEAKER",
    descripcion: "Monitor de estudio con precisión de sonido, diseñado para productores y mezcladores.",
    precio: 320.0,
    stock: 10,
    categoria: "monitores",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/HbLpMWx.png",
      "https://imgur.com/1d1QWfs.png",
      "https://imgur.com/wcM0dKZ.png",
    ],
  },
  {
    id_producto: "1742172005231",
    nombre: "RODE MIC STUDIO PRO",
    descripcion: "Micrófono condensador con calidad de estudio profesional, sonido cristalino y limpio.",
    precio: 150.0,
    stock: 20,
    categoria: "microfonos",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/Wj6F1BW.png",
      "https://imgur.com/62YYXOo.png",
      "https://imgur.com/pxDXMc5.png",
    ],
  },
  {
    id_producto: "1742172006124",
    nombre: "AUDIO TECHNICA AT2020",
    descripcion: "Micrófono de condensador de alta fidelidad, ideal para streaming y grabación en estudio.",
    precio: 180.0,
    stock: 12,
    categoria: "microfonos",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/m5ZWZCo.png",
      "https://imgur.com/WLRnbMu.png",
      "https://imgur.com/jd8kLvD.png",
    ],
  },
];

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];

    if (storedProducts.length === 0) {
      localStorage.setItem("productos", JSON.stringify(HARD_CODED_PRODUCTS));
      setProducts(HARD_CODED_PRODUCTS);
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
              key={product.id_producto || Math.random()} // Evita errores de clave duplicada
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "5px",
                background: "#222",
                color: "#fff",
              }}
            >
              {/* Imagen Principal */}
              {product.imagenes?.length > 0 ? (
                <img
                  src={product.imagenes[0]}
                  alt={product.nombre}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              ) : (
                <p className="text-muted">Sin imagen</p>
              )}

              {/* Nombre del Producto */}
              <h3 className="mt-2">{product.nombre}</h3>

              {/* Descripción del Producto */}
              <p>{product.descripcion}</p>

              {/* Estado del Producto */}
              <p className={`fw-bold ${product.estado === "NUEVO" ? "text-success" : "text-danger"}`}>
                Estado: {product.estado}
              </p>

              {/* Precio */}
              <p className="fw-bold text-warning">${Number(product.precio).toFixed(2)}</p>

              {/* Botón para ver detalles */}
              <Link
                to={product.id_producto ? `/producto/${product.id_producto}` : "#"}
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
