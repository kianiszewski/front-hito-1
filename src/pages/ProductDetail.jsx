import { useParams } from "react-router-dom";

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

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="text-center text-danger mt-5">Producto no encontrado.</p>;
  }

  return (
    <div className="container mt-5 text-white">
      <h2 className="fw-bold">{product.nombre}</h2>
      <p className="text-warning fw-bold">${product.precio.toFixed(2)}</p>
      <p>{product.descripcion}</p>

      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          {product.imagenes.map((img, index) => (
            <img key={index} src={img} alt={`img-${index}`} className="mb-2" style={{ width: "80px" }} />
          ))}
        </div>
        <img src={product.imagenes[0]} alt={product.nombre} className="img-fluid ms-4" style={{ width: "300px" }} />
      </div>
    </div>
  );
}

export default ProductDetail;
