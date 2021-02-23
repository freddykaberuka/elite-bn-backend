/*eslint-disable */
import joi from 'joi';

const AccomodationSchema = joi.object({
    checkinDate: joi.date().required(),
	checkoutDate: joi.date().required(),
	AccomodationId: joi.number().required(),

});
export default AccomodationSchema;