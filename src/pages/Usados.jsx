import { useState } from "react";

function Usados() {
  const [orden, setOrden] = useState(""); // Estado para manejar el cambio en el select

  return (
    <div className="container mt-5">
      <h2 className="text-white text-center">Productos Usados</h2>

      <div className="row">
        <div className="col-md-3">
          <label className="text-white">Ordenar por precio:</label>
          <select className="form-select mt-2" value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        <div className="col-md-9">
          <div className="row mt-4">
            <p className="text-center text-white">No hay productos en esta categoría.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usados;
