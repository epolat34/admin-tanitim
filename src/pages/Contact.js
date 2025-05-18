import React from "react";

function Contact() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", paddingTop: "100px" }}>
      <div style={{ maxWidth: "1000px", margin: "auto", padding: "0 20px 60px" }}>
        <h1 style={{ fontSize: "32px", color: "#004b8d", textAlign: "center", marginBottom: "40px" }}>
          İletişim
        </h1>

        {/* İletişim Bilgileri */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h3 style={{ color: "#272B59", fontSize: "20px", marginBottom: "10px" }}>
              Adres
            </h3>
            <p style={{ lineHeight: "1.7" }}>
              Emir Polat Plastik<br />
              İkitelli OSB, Eskoop Sanayi Sitesi<br />
              Başakşehir / İstanbul
            </p>

            <h3 style={{ color: "#272B59", fontSize: "20px", margin: "25px 0 10px" }}>
              Telefon
            </h3>
            <p>+90 532 000 00 00</p>

            <h3 style={{ color: "#272B59", fontSize: "20px", margin: "25px 0 10px" }}>
              E-posta
            </h3>
            <p>info@emirpolatplastik.com</p>
          </div>

          {/* Harita */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <iframe
              title="Harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.308156711108!2d28.791755!3d41.064513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3a99f59a8d7%3A0xa6d68a0ed1e63f02!2s%C4%B0kitelli%20OSB%2C%20Ba%C5%9Fak%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1681234567890"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* İletişim Formu (istersen aktif hale getirilebilir) */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ fontSize: "24px", color: "#004b8d", marginBottom: "20px" }}>
            Bize Mesaj Gönderin
          </h2>
          <form>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Ad Soyad"
                required
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="email"
                placeholder="E-posta"
                required
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <textarea
              placeholder="Mesajınız"
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                backgroundColor: "#004b8d",
                color: "#fff",
                fontSize: "16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
