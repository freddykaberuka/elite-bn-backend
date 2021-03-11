import tripServices from '../services/tripServices';
import Util from '../helpers/utils';

const util = new Util();

export default async (req, res, next) => {
  const userId = req.userInfo.id;
  const tripId = req.params.id;

  const trip = await tripServices.findById(tripId);
  if (!trip) {
    util.setError(404, 'Trip not found');
    return util.send(res);
  }

  if (trip.user_id !== userId) {
    util.setError(403, 'not allowed to view this trip');
    return util.send(res);
  }

  return next();
};
