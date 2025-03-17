import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtiene productos almacenados en localStorage
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];

    // Busca el producto por ID
    const foundProduct = storedProducts.find((p) => p.id_producto === id);

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-danger mt-5">Producto no encontrado.</p>;
  }

  return (
    <div className="container mt-5 text-white">
      <h2 className="fw-bold">{product.nombre}</h2>
      <p className="text-warning fw-bold">${Number(product.precio || 0).toFixed(2)}</p>
      <p>{product.descripcion}</p>

      {/* Imagen principal del producto */}
      {product.imagenes && product.imagenes.length > 0 && (
        <img src={product.imagenes[0]} alt={product.nombre} className="w-50" />
      )}
    </div>
  );
}

export default ProductDetail;
