const db = require("../config/db.connect");
const Eleman = require("../model/Eleman");



exports.findAll = async () => {
  return await db.sequelize.query("SELECT * FROM `sip_tbleleman`", {
    type: db.sequelize.QueryTypes.SELECT,
    model: Eleman,
    mapToModel: true,
    raw: true,
  });
};

// Login işlemi
exports.login = async (ceptel, sifre) => {
  if (!ceptel || !sifre) {  
    throw new Error("Telefon numarası ve şifre gerekli!");
  }

  try {
    // Veritabanında ceptel ve şifreyi sorgula
    const results = await db.sequelize.query(
      "SELECT * FROM `sip_tbleleman` WHERE `ceptel` = :ceptel AND `sifre` = :sifre AND `yonetici`='Y' LIMIT 1", 
      {
        replacements: { ceptel, sifre },
        type: db.sequelize.QueryTypes.SELECT,
        raw: true,
      }
    );

    // Sonuç yoksa hata fırlat
    if (results.length === 0) {
      throw new Error("Kullanıcı bulunamadı veya şifre geçersiz!");
    }

    const eleman = results[0];

    // Yalnızca gerekli alanları döndür
    const filteredEleman = {
      id: eleman.id,
      firmaid: eleman.firmaid,
      elemanid: eleman.elemanid,
      adsoyad: eleman.adsoyad,
      cinsiyet: eleman.cinsiyet,
      ceptel: eleman.ceptel,
      yonetici: eleman.yonetici,
      kasiyer: eleman.kasiyer,
      kurye: eleman.kurye,
      garson: eleman.garson,
      mutfak: eleman.mutfak,
      genel: eleman.genel,
      aktif: eleman.aktif,
      uygulama: eleman.uygulama,
    };

    // Kullanıcı bilgilerini logla
    console.log("Login başarılı. Kullanıcı bilgileri:", filteredEleman);

    return filteredEleman;
  } catch (error) {
    throw new Error(error.message || "Bir hata oluştu!");
  }
};


