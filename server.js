require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();

// CORS middleware'ini kullanıyoruz
app.use(cors({
  origin: "*", // Burada "*" tüm origin'lere izin veriyor
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// CORS başarı ve hata loglama middleware'i
app.use((req, res, next) => {
  // CORS işlemi başarılı olduğunda logla
  console.log(`[CORS] Incoming request from ${req.headers.origin} for ${req.url}`);
  next(); // Bir sonraki middleware'e geç
});

// CORS hatalarını yakalamak için özel bir middleware
app.use((err, req, res, next) => {
  // Eğer hata varsa ve bu CORS ile ilgiliyse logla
  if (err) {
    console.error(`[CORS ERROR] ${err.message} from ${req.headers.origin} for ${req.url}`);
    res.status(500).send({ message: 'CORS Error: Something went wrong!' });
  }
  next(); // Hata işleme işlemi bittiğinde bir sonraki middleware'e geç
});

// Express'in JSON ve URL-encoded gövdesini kabul etmesini sağla
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route'lar
const elemanRoutes = require("./routers/elemanRoutes");
const siparisRoutes = require("./routers/siparisRoutes");
app.use("/api/eleman", elemanRoutes);
app.use("/api/siparis", siparisRoutes);

// Genel error handler: CORS hataları dahil tüm hataları loglayacağız
app.use((err, req, res, next) => {
  if (err) {
    console.error(`[ERROR] ${err.message}`);
    res.status(500).send({ message: 'Something went wrong!' });
  }
});

// Portu belirleyerek sunucuyu başlat
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
