import React from "react";

function Hakkımızda() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", paddingTop: "100px" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "0 20px 60px",
          textAlign: "center",
        }}
      >
        {/* Başlık */}
        <h1 style={{ fontSize: "32px", color: "#004b8d", marginBottom: "30px" }}>
          Hakkımızda
        </h1>

        {/* Giriş Paragrafı */}
        <p style={{ fontSize: "17px", lineHeight: "1.8", marginBottom: "40px" }}>
          Emir Polat Plastik, plastik hammadde sektöründe kaliteli ve sürdürülebilir çözümler sunan öncü bir firmadır. 
          İstanbul merkezli olarak, Türkiye genelinde birçok sanayi kuruluşuna tedarik sağlıyoruz. Vizyonumuz, sektörde yenilikçi 
          ve çevre dostu uygulamalarla fark yaratmak; misyonumuz ise müşterilerimize güvenilir, hızlı ve ekonomik hizmet sunmaktır.
        </p>

        {/* Görsel + Yazı Alanı */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          <img
            src="https://img.freepik.com/premium-photo/blue-polymer-granules-plastic-pellets_8087-1579.jpg"
            alt="Plastik üretimi"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <div style={{ flex: 1, maxWidth: "500px", textAlign: "left" }}>
            <h2 style={{ color: "#004b8d", fontSize: "24px", marginBottom: "15px" }}>
              Ne Yapıyoruz?
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
              Geniş ürün yelpazemizle polietilen, polipropilen, PVC, poliamid ve geri dönüştürülmüş plastik hammaddeler sunuyoruz.
              Sektörel ihtiyaçlara özel çözümler üreterek üretim süreçlerinizi kolaylaştırıyor, zaman ve maliyet avantajı sağlıyoruz.
            </p>
          </div>
        </div>

        {/* Değerler */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "24px", color: "#004b8d", marginBottom: "20px" }}>
            Temel Değerlerimiz
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {[
              "Müşteri Memnuniyeti",
              "Çevreye Duyarlılık",
              "Kalite Standartları",
              "Hızlı Teslimat",
              "Güvenilir Tedarik",
              "Uygun Fiyat Politikası",
            ].map((deger, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: "#fff",
                  padding: "20px 25px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  minWidth: "220px",
                  fontSize: "16px",
                }}
              >
                {deger}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hakkımızda;
