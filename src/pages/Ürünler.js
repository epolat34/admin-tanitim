import React from "react";

function Ürünler() {
  const ürünler = [
    {
      title: "Polietilen (PE)",
      description:
        "Ambalaj, boru ve film üretiminde kullanılan, esnek ve kimyasal direnci yüksek bir termoplastiktir. Hem düşük hem de yüksek yoğunluklu türleri bulunur.",
      image:
        "https://img.freepik.com/free-photo/plastic-pellets-close-up_123827-24115.jpg",
    },
    {
      title: "Polipropilen (PP)",
      description:
        "Yüksek sıcaklıklara ve darbelere dayanıklı yapısıyla otomotivden tekstile birçok sektörde kullanılır. Aynı zamanda hafiftir ve kolay şekil alır.",
      image:
        "https://img.freepik.com/free-photo/polypropylene-granules-pp-background-plastic-pellets_93675-128293.jpg",
    },
    {
      title: "PVC Granül",
      description:
        "Sert veya yumuşak şekilde üretilebilen bu malzeme boru, pencere profili ve kablo izolasyonu gibi alanlarda tercih edilir.",
      image:
        "https://img.freepik.com/premium-photo/pvc-polymer-granules-white-background-plastic-pellets-pvc-compound_419341-1906.jpg",
    },
    {
      title: "Poliamid (PA)",
      description:
        "Mekanik dayanımı yüksek, aşınmaya karşı dirençli bir plastik türüdür. Genellikle mühendislik uygulamalarında ve makine parçalarında kullanılır.",
      image:
        "https://img.freepik.com/free-photo/white-polymer-granules-plastic-pellets_93675-128294.jpg",
    },
    {
      title: "Geri Dönüştürülmüş Plastik",
      description:
        "Çevreye duyarlı üretim anlayışıyla plastik atıklardan elde edilen bu ürünler, maliyet avantajı ve sürdürülebilirlik sunar.",
      image:
        "https://img.freepik.com/free-photo/colorful-recycled-plastic-pellets_23-2148882457.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f9f9f9", paddingTop: "100px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 20px 60px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            textAlign: "center",
            color: "#004b8d",
            marginBottom: "50px",
            fontWeight: "bold",
          }}
        >
          Ürünlerimiz
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          {ürünler.map((ürün, index) => (
            <div
              key={index}
              style={{
                width: "calc(33% - 20px)",
                minWidth: "280px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={ürün.image}
                alt={ürün.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ color: "#004b8d", fontSize: "20px" }}>
                  {ürün.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", marginTop: "10px" }}>
                  {ürün.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ekstra: Neden Biz */}
        <div
          style={{
            marginTop: "80px",
            backgroundColor: "#272B59",
            borderRadius: "10px",
            padding: "40px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
            Neden Emir Polat Plastik?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", maxWidth: "800px", margin: "auto" }}>
            Kalite, uygun fiyat ve hızlı tedarik garantisi ile plastik hammadde
            ihtiyaçlarınıza profesyonel çözümler sunuyoruz. Türkiye genelinde
            yüzlerce işletmenin güvenilir tedarikçisiyiz. Çevreye duyarlı
            üretim anlayışımızla sürdürülebilirliğe katkı sağlıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ürünler;
