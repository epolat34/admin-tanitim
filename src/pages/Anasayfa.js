import AnimatedCounter from "../components/AnimatedCounter";

function Anasayfa() {
  return (
    <div>
      {/* Üstteki görsel */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "80vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Sayılar Bölümü */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          padding: "60px 20px",
          backgroundColor: "#fff",
          flexWrap: "wrap",
        }}
      >
        {/* Kutu 1 */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#e0f0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginBottom: "15px",
            }}
          >
            <h2 style={{ fontSize: "38px", fontWeight: "bold", color: "#272B59" }}>
              <AnimatedCounter target={41} duration={1000} />
            </h2>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#272B59" }}>
            KG SERA GAZI
          </p>
        </div>

        {/* Kutu 2 */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#e0f0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginBottom: "15px",
            }}
          >
            <h2 style={{ fontSize: "38px", fontWeight: "bold", color: "#272B59" }}>
              <AnimatedCounter target={5774} duration={1000} />
            </h2>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#272B59" }}>
            KWH ENERJİ
          </p>
        </div>

        {/* Kutu 3 */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#e0f0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginBottom: "15px",
            }}
          >
            <h2 style={{ fontSize: "38px", fontWeight: "bold", color: "#272B59" }}>
              <AnimatedCounter target={80} duration={1000} />%
            </h2>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#272B59" }}>
            ENERJİ TASARRUFU
          </p>
        </div>
      </div>

      {/* Görsel + Yazı Bölümü */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "auto",
          gap: "40px",
        }}
      >
        <img
          src="https://content.girisimcigazetesi.com/blog/770x480/1601629701_47.jpg"
          alt="Plastik hammaddeler"
          style={{ width: "40%", borderRadius: "10px" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#272B59", fontSize: "28px" }}>
            Plastik Hammadde Çözümlerimiz
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Polietilen, polipropilen, PVC ve geri dönüştürülmüş plastik
            çeşitleriyle sektörünüze uygun tedarik çözümleri sunuyoruz.
            Kalite, hız ve uygun fiyat politikamızla Türkiye'nin her yerine
            hizmet veriyoruz.
          </p>
        </div>
      </div>

      {/* Ürünlerimiz (3. sıraya çıktı) */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#004b8d",
              fontSize: "28px",
              marginBottom: "40px",
            }}
          >
            Ürünlerimiz
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            {/* Kart 1 – Polietilen */}
            <div
              style={{
                width: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://www.karacageridonusum.com/uploads/proje/31/proje31.jpg"
                alt="Polietilen"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#004b8d" }}>Polietilen (PE)</h3>
                <p>
                  Polietilen, ambalaj ve boru üretiminde yaygın olarak
                  kullanılan, esnek ve dayanıklı bir termoplastiktir.
                </p>
              </div>
            </div>

            {/* Kart 2 */}
            <div
              style={{
                width: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://efkpolimer.com/wp-content/uploads/2024/01/Polipropilen.jpg"
                alt="Polipropilen"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#004b8d" }}>Polipropilen (PP)</h3>
                <p>
                  Hafif ve yüksek sıcaklığa dayanıklı yapısıyla öne çıkar.
                </p>
              </div>
            </div>

            {/* Kart 3 */}
            <div
              style={{
                width: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://saydasplastik.com.tr/wp-content/uploads/2023/05/plastik-granul-nedir-plastik-granul-hammadde.jpg"
                alt="PVC Granül"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#004b8d" }}>Poliamid (PA)</h3>
                <p>
                  Elektrik tesisatından pencere profiline kadar yaygın
                  kullanılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hakkımızda (artık en alt kısım) */}
      <div
        style={{
          backgroundColor: "#272B59",
          width: "100%",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            textAlign: "center",
            color: "#FAF7ED",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Hakkımızda
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Emir Polat Plastik olarak, yılların verdiği tecrübe ve güvenle
            plastik hammadde sektöründe çözüm ortağınız oluyoruz. Hedefimiz,
            müşteri memnuniyetini ön planda tutarak sürdürülebilir ve kaliteli
            tedarik hizmeti sunmak. İstanbul merkezli firmamız, Türkiye
            genelinde birçok sanayi kuruluşuna hizmet vermektedir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Anasayfa;
