import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import CategoryPage from "./pages/CategoryPage";

// ✅ Páginas individuales para Usados, Nuevos y Categorías
import Usados from "./pages/Usados";
import Nuevos from "./pages/Nuevos";
import Monitores from "./pages/Monitores";
import Controladores from "./pages/Controladores";
import Microfonos from "./pages/Microfonos";
import Accesorios from "./pages/Accesorios";
import Todo from "./pages/Todo";

import PaymentMethods from "./pages/PaymentMethods";
import Addresses from "./pages/Addresses";
import MisPublicaciones from "./pages/MisPublicaciones";
import CrearPublicacion from "./pages/CrearPublicacion";
import EditarPublicacion from "./pages/EditarPublicacion";
import MisCompras from "./pages/MisCompras";

import { useEffect } from "react";

// ✅ Productos Hardcodeados
const productosIniciales = [
  {
    id: "1",
    nombre: "MALD PARLANTE",
    descripcion: "Parlante de estudio 32bit Float HQ",
    precio: 210,
    stock: 5,
    categoria: "monitores",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/wxUGIX8.jpg",
      "https://imgur.com/tGNhS4s.jpg",
      "https://imgur.com/V5HhLV0.jpg",
    ],
  },
  {
    id: "2",
    nombre: "STUDIO MASTER SPEAKER",
    descripcion: "Ideal para producciones profesionales y amateurs.",
    precio: 320,
    stock: 3,
    categoria: "monitores",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/HbLpMWx.jpg",
      "https://imgur.com/1d1QWfs.jpg",
      "https://imgur.com/wcM0dKZ.jpg",
    ],
  },
  {
    id: "3",
    nombre: "RODE MIC STUDIO PRO",
    descripcion: "Calidad de grabación profesional con cancelación de ruido.",
    precio: 150,
    stock: 10,
    categoria: "microfonos",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/Wj6F1BW.jpg",
      "https://imgur.com/62YYXOo.jpg",
      "https://imgur.com/pxDXMc5.jpg",
    ],
  },
  {
    id: "4",
    nombre: "BLUE YETI MIC",
    descripcion: "Micrófono versátil para grabaciones, podcasting y streaming.",
    precio: 130,
    stock: 7,
    categoria: "microfonos",
    estado: "NUEVO",
    imagenes: [
      "https://imgur.com/m5ZWZCo.jpg",
      "https://imgur.com/WLRnbMu.jpg",
      "https://imgur.com/jd8kLvD.jpg",
    ],
  },
];

function App() {
  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    if (productosGuardados.length === 0) {
      localStorage.setItem("productos", JSON.stringify(productosIniciales));
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Rutas de Categorías */}
          <Route path="/categoria/monitores" element={<Monitores />} />
          <Route path="/categoria/controladores" element={<Controladores />} />
          <Route path="/categoria/microfonos" element={<Microfonos />} />
          <Route path="/categoria/accesorios" element={<Accesorios />} />
          <Route path="/usados" element={<Usados />} />
          <Route path="/nuevos" element={<Nuevos />} />
          <Route path="/categoria/todo" element={<Todo />} />

          {/* ✅ Rutas de Usuario */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/mis-publicaciones" element={<MisPublicaciones />} />
          <Route path="/profile/metodos-de-pago" element={<PaymentMethods />} />
          <Route path="/profile/direcciones" element={<Addresses />} />
          <Route path="/profile/notificaciones" element={<Notifications />} />
          <Route path="/profile/mis-compras" element={<MisCompras />} />

          {/* ✅ Rutas de Publicaciones */}
          <Route path="/crear-publicacion" element={<CrearPublicacion />} />
          <Route path="/editar-publicacion/:id" element={<EditarPublicacion />} />

          {/* ✅ Manejo de rutas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
