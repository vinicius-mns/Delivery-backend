const { Router } = require('express');
const multer = require('multer');

const imageRoutes = Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images');
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

imageRoutes.post('/', upload.single('file'), (req, res, next) => {
  try {
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
});

module.exports = imageRoutes;

// http://localhost:3001/images/skol_lata_350ml.jpg
// http://localhost:3001/images/heineken_600ml.jpg
// http://localhost:3001/images/antarctica_pilsen_300ml.jpg
// http://localhost:3001/images/brahma_600ml.jpg
// http://localhost:3001/images/skol_269ml.jpg
// http://localhost:3001/images/skol_beats_senses_313ml.jpg
// http://localhost:3001/images/becks_330ml.jpg
// http://localhost:3001/images/brahma_duplo_malte_350ml.jpg
// http://localhost:3001/images/becks_600ml.jpg
// http://localhost:3001/images/skol_beats_senses_269ml.jpg
// http://localhost:3001/images/stella_artois_275ml.jpg