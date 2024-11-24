const db = require("../config/db.connect");

const getOrdersByFirmaID = async (firmaId, orderStatus) => {
  try {
    let query = "SELECT * FROM `sip_tblyemeksepeti` WHERE `orderFirmaID` = :firmaId";
    const replacements = { firmaId };

    if (orderStatus && typeof orderStatus === 'string' && orderStatus.trim() !== '') {
      query += " AND `orderStatus` = :orderStatus";
      replacements.orderStatus = orderStatus.trim();  
    }

    const results = await db.sequelize.query(query, {
      replacements,
      type: db.sequelize.QueryTypes.SELECT,
      raw: true,
    });

    if (!results || results.length === 0) {
      return [];
    }

    return results;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Siparişler alınırken bir hata oluştu.");
  }
};

module.exports = { getOrdersByFirmaID };
