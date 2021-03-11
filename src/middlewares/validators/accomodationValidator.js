import schema from '../../helpers/validateSchemas/accomodationValidationSchema';
import Util from '../../helpers/utils';

const util = new Util();
export default class Accomodation {
  // eslint-disable-next-line consistent-return
  static createAccomodation(req, res, next) {
    const {
      error,
    } = schema.validate(req.body);
    if (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
    next();
  }
}
