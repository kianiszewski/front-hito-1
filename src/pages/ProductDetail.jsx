import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];
    const foundProduct = storedProducts.find((p) => p.id_producto.toString() === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <p className="text-center text-danger mt-5">Producto no encontrado.</p>;

  return (
    <div className="container mt-5 text-white">
      <div className="row">
        <div className="col-md-2 d-flex flex-column align-items-center">
          {product.imagenes?.map((img, index) => (
            <img key={index} src={img} alt={`Imagen ${index + 1}`} className="img-thumbnail mb-2"
              style={{ cursor: "pointer", maxWidth: "100px" }} />
          ))}
        </div>

        <div className="col-md-5 d-flex justify-content-center">
          {product.imagenes?.length > 0 ? (
            <img src={product.imagenes[0]} className="img-fluid rounded shadow-lg"
              alt={product.nombre} style={{ maxHeight: "400px", objectFit: "contain" }} />
          ) : <p>Sin imagen</p>}
        </div>

        <div className="col-md-5">
          <h2 className="fw-bold">{product.nombre}</h2>
          <p className={`fw-bold ${product.estado === "NUEVO" ? "text-success" : "text-danger"}`}>
            Estado: {product.estado}
          </p>
          <h4 className="text-warning fw-bold">${Number(product.precio || 0).toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
