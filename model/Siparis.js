const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Siparis = sequelize.define(
    "Siparis", // Model adı
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      orderRemoteID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      orderFirmaID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      orderEntegrasyonID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      orderToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      orderJson: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      orderDateTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      orderQueryJson: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      orderStatusChange: {
        type: DataTypes.ENUM("Y", "N"),
        allowNull: true,
        defaultValue: "N",
      },
      orderStatus: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      orderStatusMessage: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      orderStatusJson: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      orderStatusDateTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      orderShow: {
        type: DataTypes.ENUM("Y", "N"),
        allowNull: true,
        defaultValue: "N",
      },
      orderShowTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "sip_tblyemeksepeti", // Tablo adı
      timestamps: false, // createdAt ve updatedAt sütunları kullanılmayacaksa
    }
  );

  return Siparis;
};
