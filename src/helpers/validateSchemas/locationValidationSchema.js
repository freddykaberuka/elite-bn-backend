import joi from 'joi';

const locationSchema = joi.object({
  location_id: joi.number().required(),
  name: joi.string().min(4).required(),
});

export default locationSchema;
