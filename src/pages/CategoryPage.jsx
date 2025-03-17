import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoria } = useParams();

  return (
    <div className="container mt-5">
      <h2 className="text-white text-center">{categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()}</h2>
      <p className="text-white text-center">Aquí se mostrarán los productos de la categoría {categoria}.</p>
    </div>
  );
}

export default CategoryPage;
