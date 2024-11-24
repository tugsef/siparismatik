const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Eleman = sequelize.define(
    "Eleman", // Model adı
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      firmaid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      elemanid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sifre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adsoyad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cinsiyet: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      ceptel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      yonetici: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      kasiyer: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      kurye: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      garson: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      mutfak: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      genel: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      aktif: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      uygulama: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      konumzaman: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      konumenlem: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      konumboylam: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telgoster: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      guncelle: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      sil: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      firmakasacaribilgi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firmakasadurum: {
        type: DataTypes.ENUM("BEKLIYOR", "IPTAL", "ONAY", "RED", "TESLIM"),
        allowNull: true,
      },
      firmakasafirmaid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      firmakasagunsonu: {
        type: DataTypes.ENUM("EVET", "HAYIR"),
        allowNull: true,
      },
      firmakasagunsonuid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      firmakasagunsonuzaman: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      firmakasaguncelle: {
        type: DataTypes.ENUM("EVET", "HAYIR"),
        allowNull: true,
      },
      firmakasaislembilgi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firmakasakurye: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firmakasasube: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firmakasasubesiparis: {
        type: DataTypes.ENUM("EVET", "HAYIR"),
        allowNull: true,
      },
      firmakasaurunbilgi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firmakasazaman: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
    },
    {
      tableName: "sip_tbleleman", // Tablo adı
      timestamps: false, // createdAt ve updatedAt sütunları kullanılmayacaksa
    }
  );

  return Eleman;
};
