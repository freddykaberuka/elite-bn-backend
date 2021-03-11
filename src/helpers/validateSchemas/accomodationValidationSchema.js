import joi from 'joi';

const accomodationSchema = joi.object({
  name: joi.string().min(4).required(),
  description: joi.string().min(10).required(),
  location_id: joi.number().required(),
  facilities: joi.array().min(1),
  image: joi.array().min(1),
  capacity: joi.number().required().min(0),
  roomsLeft: joi.number(),
  cost: joi.number().required(),
  averageRating: joi.number().min(1).max(5),

});

export default accomodationSchema;
