const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
    //Log to console
    console.log(err.name);
    //Mongoose bad ObjectId
    if(err.name === 'CastError'){

        const message = `Ressource not found with the id of ${err.value}`;
        error = new errorResponse(message, 404);

    }
    //MONGO ERROR duplicate key
    if(err.code === 11000){
        const message = 'Duplicate field value enterred';
        error = new errorResponse(message, 400);
    }

    //Validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new errorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    });
}

module.exports = errorHandler;