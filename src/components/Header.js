import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const backgroundColor = isHome && !scrolled ? "transparent" : "#ffffff";
  const borderBottom = isHome && !scrolled ? "none" : "1px solid #ddd";
  const textColor = isHome && !scrolled ? "#ffffff" : "#272B59";
  const logoHeight = isHome && !scrolled ? "600px" : "250px";
  const logoMarginTop = isHome && !scrolled ? "150px" : "15px";
  const logoMarginLeft = isHome && !scrolled ? "-120px" : "-60px";


  return (
    <nav
      style={{
        width: "100%",
        height: "100px",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor,
        borderBottom,
        transition:
          "background-color 0.3s ease, border-bottom 0.3s ease, height 0.3s ease",
      }}
    >
     

     <Link
  to="/"
  style={{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: logoMarginLeft,
    transition: "margin-left 0.3s ease", // geçiş efekti
  }}
>
  <img
    src={logo}
    alt="FABİ Logo"
    style={{
      height: logoHeight,
      marginTop: logoMarginTop,
      transition: "height 0.3s ease, filter 0.3s ease, margin-top 0.3s ease",
      filter: isHome && !scrolled ? "brightness(0) invert(1)" : "none",
    }}
  />
</Link>



      {/* Menü (tam ortada) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ ...linkStyle, color: textColor }}>Ana Sayfa</Link>
        <Link to="/products" style={{ ...linkStyle, color: textColor }}>Ürünler</Link>
        <Link to="/about" style={{ ...linkStyle, color: textColor }}>Hakkımızda</Link>
        <Link to="/contact" style={{ ...linkStyle, color: textColor }}>İletişim</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  transition: "color 0.3s ease",
};

export default Header;
