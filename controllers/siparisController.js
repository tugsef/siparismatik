const asyncHandler = require('../middleware/async');
const {getOrdersByFirmaID} = require('../repository/siparisRepository'); // Repository'yi içe aktar

exports.getOrdersByFirmaID = asyncHandler(async (req, res) => {
  const { firmaId, orderStatus } = req.query; 

  try {
    const orders = await getOrdersByFirmaID(firmaId,orderStatus);
    
    if (orders.message) {
      return res.status(404).json(orders);  // Sipariş bulunamadığında 404 dön
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  
