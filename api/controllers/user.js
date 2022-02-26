const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Get users
// @route     GET /users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  
  const users = await User.find();
  res.status(200).json({
      success: true,
      data: users
  });
  if(!users){
      return next(new errorResponse(`No users found`, 404));
  }
});

// @desc      Get user
// @route     GET /user/:id
// @access    Public
exports.getUser = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: user
    });
    if(!user){
        return next(new errorResponse(`User not found with the id of ${req.params.id}`, 404));
    } 
});

// @desc      Add user
// @route     POST /user
// @access    Public
exports.addUser = asyncHandler(async (req, res, next) => {

    //Add user to the req body
    //req.body.user = req.user.id;
    const user = await User.create(req.body);
    res.status(200).json({
        success: true,
        data: user
    });
    
  });

// @desc      Update user
// @route     PATCH /user/:id
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {

    let user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorResponse(`No User found with the id of ${req.params.id}`, 404));
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }); 
    res.status(200).json({
      success: true,
      data: user
    });
  });

// @desc      Delete user
// @route     DELETE /user/:id
// @access    Public
exports.deleteUser = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorResponse(`No User found with the id of ${req.params.id}`, 404));
    }
    await user.remove();
    res.status(200).json({
      success: true,
      data: {}
    });
  });

