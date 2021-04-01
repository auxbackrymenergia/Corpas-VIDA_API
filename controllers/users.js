const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
//const User = require('../models/User');
const Vacuna = require('../models/Vacuna');

//@desc     Get all users
//@route    GET /api/v1/auth/user
//@access   Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc     Get single user
//@route    GET /api/v1/auth/user/:id
//@access   Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const vacuna = await Vacuna.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: vacuna,
  });
});

//@desc     Create user
//@route    POST /api/v1/auth/user/:id
//@access   Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const vacuna = await Vacuna.create(req.body);

  res.status(201).json({
    success: true,
    data: vacuna,
  });
});

//@desc     Update user
//@route    PUT /api/v1/auth/user/:id
//@access   Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const vacuna = await Vacuna.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  

  res.status(200).json({
    success: true,
    data: vacuna,
  });
});

//@desc     Delete user
//@route    DELETE /api/v1/auth/user/:id
//@access   Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await Vacuna.findOneAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
