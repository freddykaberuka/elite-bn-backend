/*eslint-disable */
import Joi from 'joi';

const ReviewsValidationSchema = Joi.object({
    accomodationId: Joi.number().required(),
    review: Joi.string().required()
});

export default ReviewsValidationSchema;