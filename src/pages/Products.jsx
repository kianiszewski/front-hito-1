import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    nombre: "MALD PARLANTE",
    descripcion: "Parlante de estudio 32BIT FLOAT HQ",
    estado: "NUEVO",
    precio: 210.0,
    imagenes: [
      "https://imgur.com/wxUGIX8.png",
      "https://imgur.com/tGNhS4s.png",
      "https://imgur.com/V5HhLV0.png",
    ],
  },
  {
    id: 2,
    nombre: "STUDIO MASTER SPEAKER",
    descripcion: "Ideal para producciones profesionales y amateurs.",
    estado: "NUEVO",
    precio: 320.0,
    imagenes: [
      "https://imgur.com/HbLpMWx.png",
      "https://imgur.com/1d1QWfs.png",
      "https://imgur.com/wcM0dKZ.png",
    ],
  },
  {
    id: 3,
    nombre: "RODE MIC STUDIO PRO",
    descripcion: "Micrófono profesional para grabación de voz.",
    estado: "NUEVO",
    precio: 150.0,
    imagenes: [
      "https://imgur.com/Wj6F1BW.png",
      "https://imgur.com/62YYXOo.png",
      "https://imgur.com/pxDXMc5.png",
    ],
  },
  {
    id: 4,
    nombre: "AUDIO-TECHNICA MIC",
    descripcion: "Micrófono condensador de alta fidelidad.",
    estado: "NUEVO",
    precio: 180.0,
    imagenes: [
      "https://imgur.com/m5ZWZCo.png",
      "https://imgur.com/WLRnbMu.png",
      "https://imgur.com/jd8kLvD.png",
    ],
  },
];

function Products() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-white">Productos Disponibles</h2>
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
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "5px",
              background: "#222",
              color: "#fff",
            }}
          >
            <img
              src={product.imagenes[0]}
              alt={product.nombre}
              style={{ width: "100%", borderRadius: "5px" }}
            />

            <h3 className="mt-2">{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p className="fw-bold text-success">Estado: {product.estado}</p>
            <p className="fw-bold text-warning">${product.precio.toFixed(2)}</p>

            <Link
              to={`/producto/${product.id}`}
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
    </div>
  );
}

export default Products;
