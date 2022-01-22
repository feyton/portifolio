// validation
const Joi = require(`@hapi/joi`);

// Register validation
const registerValidation = (data) =>{
    const schema = Joi.object({
        full_name: Joi.string().min(4).required(),
        email : Joi.string().min(6).required().email(),
        password: Joi.string().min(8).required()
        
     });   
    return schema.validate(data);
};
// login validation
const loginValidation = (data) =>{
    const schema = Joi.object({
        email : Joi.string().min(6).required().email(),
        password: Joi.string().min(8).required()
        
     });   
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation =loginValidation;