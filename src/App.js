import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Anasayfa from "./pages/Anasayfa";
import Hakkımızda from "./pages/Hakkımızda";
import Ürünler from "./pages/Ürünler";
import Contact from "./pages/Contact";


// İçerik + footer yapısı ayrı bileşen içine alınır
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <Header />

      {/* Sayfa içeriği */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/about" element={<Hakkımızda />} />
          <Route path="/products" element={<Ürünler />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Sosyal medya ikonları - sadece Ana Sayfa'da */}
   {isHome && (
  <div
    style={{
      backgroundColor: "#fff",
      height: "30px", // 📏 Sabit yükseklik!
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
    }}
  >
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="Instagram"
        style={{
          width: "18px",
          height: "18px",
        }}
      />
    </a>
    <a href="https://wa.me/905320000000" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{
          width: "18px",
          height: "18px",
        }}
      />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
        alt="Facebook"
        style={{
          width: "18px",
          height: "18px",
        }}
      />
    </a>
  </div>
)}



      <Footer />
    </div>
  );
}

// Ana bileşen Router ile sarılmış halde
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
