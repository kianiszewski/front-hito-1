import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// ✅ Importar imágenes del banner correctamente
import banner1 from "/src/assets/images/banner1.png";
import banner2 from "/src/assets/images/banner2.png";
import banner3 from "/src/assets/images/banner3.png";

// ✅ Productos en oferta
const productos = [
  {
    id: "1",
    nombre: "MALD PARLANTE",
    precio: "210",
    imagen: "https://imgur.com/wxUGIX8.png",
  },
  {
    id: "2",
    nombre: "STUDIO MASTER SPEAKER",
    precio: "320",
    imagen: "https://imgur.com/HbLpMWx.png",
  },
  {
    id: "3",
    nombre: "RODE MIC STUDIO PRO",
    precio: "150",
    imagen: "https://imgur.com/m5ZWZCo.png",
  },
];

function Home() {
  return (
    <Container fluid className="home-container" style={{ maxWidth: "1200px", padding: "2rem", minHeight: "100vh" }}>
      {/* Sección 1: Banner */}
      <Row>
        <Col className="text-center">
          <img src={banner1} alt="Banner" className="img-fluid" style={{ width: "100%", height: "auto" }} />
          <h2 className="mt-3 text-white">¡Bienvenido a CABLESPACE!</h2>
        </Col>
      </Row>

      {/* Sección 2: Carrusel Swiper con imágenes */}
      <div className="container mt-5 p-4" style={{ backgroundColor: "#1a1a1a", borderRadius: "10px" }}>
        <h2 className="text-center text-white">Productos en Oferta</h2>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          navigation
          slidesPerView={3}
          spaceBetween={30}
          effect="coverflow"
          centeredSlides={true}
          loop={false}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className="mt-4"
        >
          {productos.map((producto) => (
            <SwiperSlide key={producto.id}>
              <div className="product-card text-center">
                <img src={producto.imagen} alt={producto.nombre} className="w-100 mb-3" />
                <h5 className="text-white">{producto.nombre}</h5>
                <p className="text-white">${producto.precio}</p>
                <Button variant="warning" className="w-100 mt-2">VER</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default Home;
