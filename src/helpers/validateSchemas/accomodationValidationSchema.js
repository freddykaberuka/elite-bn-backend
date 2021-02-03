import joi from 'joi';

const accomodationSchema = joi.object({
  name: joi.string().min(4).required(),
  description: joi.string().min(10).required(),
  location_id: joi.number().required(),
  facilities: joi.array().min(1),
  image: joi.string(),
  roomSize: joi.number().required().min(0),
  capacity: joi.number().required().min(0),

});

export default accomodationSchema;
