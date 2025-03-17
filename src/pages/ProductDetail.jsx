import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];
    const foundProduct = storedProducts.find(p => p.id_producto === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) return <p className="text-center text-danger mt-5">Producto no encontrado.</p>;

  return (
    <div className="container mt-5 text-white">
      <h2 className="fw-bold">{product.nombre}</h2>
      <p className="text-warning fw-bold">${Number(product.precio || 0).toFixed(2)}</p>
      <div className="d-flex justify-content-center">
        {product.imagenes?.length > 0 && (
          <img src={product.imagenes[0]} alt={product.nombre} style={{ width: "300px", borderRadius: "10px" }} />
        )}
      </div>
      <p className="mt-3">{product.descripcion}</p>
    </div>
  );
}

export default ProductDetail;
