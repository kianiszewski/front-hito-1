import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CrearPublicacion() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [estado, setEstado] = useState("NUEVO"); // NUEVO por defecto
  const [categorias, setCategorias] = useState([]);
  const [imagenes, setImagenes] = useState(["", "", "", ""]); // Hasta 4 URLs
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    // Simulación de obtener categorías (puedes cambiarlo a una API si es necesario)
    const categoriasMock = [
      { id_categoria: 1, nombre: "Monitores" },
      { id_categoria: 2, nombre: "Controladores" },
      { id_categoria: 3, nombre: "Micrófonos" },
      { id_categoria: 4, nombre: "Accesorios" },
    ];
    setCategorias(categoriasMock);
  }, []);

  const formatImageUrl = (url) => {
    if (url.trim() !== "" && !url.endsWith(".jpg")) {
      return `${url}.jpg`;
    }
    return url;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !descripcion || !precio || !stock || !idCategoria || !estado) {
      setMensaje("⚠️ Todos los campos son obligatorios.");
      return;
    }

    const imagenesValidas = imagenes
      .map(formatImageUrl)
      .filter((url) => url.trim() !== ""); // Solo URLs no vacías

    if (imagenesValidas.length === 0) {
      setMensaje("⚠️ Debes agregar al menos una imagen.");
      return;
    }

    // 🔹 Asignar un ID único al producto
    const nuevoProducto = {
      id_producto: Date.now(), // 🔥 Genera un ID único basado en la fecha
      nombre,
      descripcion,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      id_categoria: parseInt(idCategoria),
      estado,
      imagenes: imagenesValidas,
    };

    // 🔹 Guardar en localStorage
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productosGuardados));

    setMensaje("✅ Publicación creada exitosamente.");
    setTimeout(() => navigate("/products"), 2000);
  };

  return (
    <div className="container mt-5 text-white">
      <h2 className="text-center">Crear Nueva Publicación</h2>
      {mensaje && <p className="text-center mt-3">{mensaje}</p>}

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del Producto</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (USD)</label>
          <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select className="form-select" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} required>
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id_categoria} value={cat.id_categoria}>{cat.nombre}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Estado del Producto</label>
          <select className="form-select" value={estado} onChange={(e) => setEstado(e.target.value)} required>
            <option value="NUEVO">Nuevo</option>
            <option value="USADO">Usado</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Imágenes del Producto (hasta 4)</label>
          {imagenes.map((imagen, index) => (
            <input
              key={index}
              type="text"
              className="form-control mb-2"
              placeholder={`URL de imagen ${index + 1}`}
              value={imagen}
              onChange={(e) => {
                const nuevasImagenes = [...imagenes];
                nuevasImagenes[index] = e.target.value;
                setImagenes(nuevasImagenes);
              }}
            />
          ))}
        </div>

        <button type="submit" className="btn btn-warning w-100">📢 Publicar Aviso</button>
      </form>

      <button className="btn btn-outline-light w-100 mt-3" onClick={() => navigate("/profile")}>🔙 Volver</button>
    </div>
  );
}

export default CrearPublicacion;
