/* eslint-disable camelcase */
import tripServices from '../services/tripServices';
import Util from '../helpers/utils';

const util = new Util();

class TripController {
  static async create(req, res) {
    try {
      const { id } = req.userInfo;

      const trip = await tripServices.createTrip({
        ...req.body,
        user_id: id,
        travelDate: Date.now(),
      });

      util.setSuccess(201, 'You have successfully created a trip', trip);
      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }

  static async findTrip(req, res) {
    const { id } = req.params;

    const trips = await tripServices.findById(id);

    util.setSuccess(200, 'You have successfully fetched the trip', trips);
    return util.send(res);
  }
}

export default TripController;
