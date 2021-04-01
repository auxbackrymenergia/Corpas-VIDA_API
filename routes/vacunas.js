const express = require('express');

const {
  getVacunas,
  getVacuna,
  createVacuna,
  updateVacuna,
  deleteVacuna,
} = require('../controllers/vacunas');

const Vacuna = require('../models/Vacuna');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');

//router.use(protect, authorize('admin'));

router.route('/').get(advancedResults(Vacuna), getVacunas).post(createVacuna);

router.route('/:id').get(getVacuna).put(updateVacuna).delete(deleteVacuna);

module.exports = router;
