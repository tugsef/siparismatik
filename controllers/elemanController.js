const { findAll, login } = require("../repository/elemanRepository");  
const asyncHandler = require("../middleware/async");


exports.findAll = asyncHandler(async (req, res) => {

  const elemanlar = await findAll();

  res.json(elemanlar);
});

exports.login = asyncHandler(async (req, res) => {
  const { ceptel, sifre } = req.body;

  if (!ceptel || !sifre) {
    return res.status(400).json({ message: "Telefon numarası ve şifre gerekli!" });
  }

  try {
    const user = await login(ceptel, sifre); 
    res.status(200).json(user); 
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
});