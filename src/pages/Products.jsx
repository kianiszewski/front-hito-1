import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const hardcodedProducts = [
    {
      id_producto: "1742172003649",
      nombre: "MALD PARLANTE",
      descripcion: "Parlante de estudio 32BIT FLOAT HQ",
      precio: 210.0,
      stock: 10,
      categoria: "monitores",
      estado: "NUEVO",
      imagenes: [
        "https://imgur.com/wxUGIX8.png",
        "https://imgur.com/tGNhS4s.png",
        "https://imgur.com/V5HhLV0.png"
      ],
    },
    {
      id_producto: "1742172003650",
      nombre: "STUDIO MASTER SPEAKER",
      descripcion: "Ideal para producciones profesionales y amateurs.",
      precio: 320.0,
      stock: 8,
      categoria: "monitores",
      estado: "NUEVO",
      imagenes: [
        "https://imgur.com/HbLpMWx.png",
        "https://imgur.com/1d1QWfs.png",
        "https://imgur.com/wcM0dKZ.png"
      ],
    },
    {
      id_producto: "1742172003651",
      nombre: "RODE MIC STUDIO PRO",
      descripcion: "Micrófono de condensador profesional para grabaciones.",
      precio: 150.0,
      stock: 12,
      categoria: "microfonos",
      estado: "NUEVO",
      imagenes: [
        "https://imgur.com/Wj6F1BW.png",
        "https://imgur.com/62YYXOo.png",
        "https://imgur.com/pxDXMc5.png"
      ],
    },
    {
      id_producto: "1742172003652",
      nombre: "AUDIO TECHNICA MIC",
      descripcion: "Micrófono cardioide ideal para estudios profesionales.",
      precio: 180.0,
      stock: 15,
      categoria: "microfonos",
      estado: "NUEVO",
      imagenes: [
        "https://imgur.com/m5ZWZCo.png",
        "https://imgur.com/WLRnbMu.png",
        "https://imgur.com/jd8kLvD.png"
      ],
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos"));

    if (!storedProducts || storedProducts.length === 0) {
      localStorage.setItem("productos", JSON.stringify(hardcodedProducts));
      setProducts(hardcodedProducts);
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
              {product.imagenes?.length > 0 ? (
                <img
                  src={product.imagenes[0]}
                  alt={product.nombre}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              ) : (
                <p className="text-muted">Sin imagen</p>
              )}

              <h3 className="mt-2">{product.nombre}</h3>
              <p>{product.descripcion}</p>
              <p className={`fw-bold ${product.estado === "NUEVO" ? "text-success" : "text-danger"}`}>
                Estado: {product.estado}
              </p>
              <p className="fw-bold text-warning">${Number(product.precio).toFixed(2)}</p>

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
