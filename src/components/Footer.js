function Footer() {
    return (
      <footer
        style={{
          width: "100%",
          backgroundColor: "#004b8d",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
          marginTop: "60px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <p style={{ margin: "5px 0", fontSize: "16px", fontWeight: "bold" }}>
            Emir Polat Plastik Hammadde
          </p>
          <p style={{ margin: "5px 0" }}>info@emirpolatplastik.com</p>
          <p style={{ margin: "5px 0" }}>+90 532 000 00 00</p>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            © {new Date().getFullYear()} Emir Polat Plastik. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  