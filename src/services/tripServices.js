import models from '../models';

const { Trip } = models;

class TripsService {
  static createTrip(newTrip) {
    return Trip.create(newTrip);
  }

  static getTrips() {
    return Trip.findAll();
  }

  static findById(modelId) {
    return Trip.findOne({
      where: { id: modelId },
    });
  }

  static getAllTripsByRole(condition, skip, itemsPerPage) {
    return Trip.findAndCountAll({
      where: condition,
      offset: skip,
      limit: itemsPerPage,
      include: [
        {
          model: models.Accomodations,
          as: 'accomodation',
        },
        {
          model: models.Locations,
          as: 'to',
          attributes: ['name'],
        },
        {
          model: models.User,
          as: 'requester',
          attributes: ['firstName', 'lastName', 'email'],
        }],
    });
  }

  static updateTrip(set, prop) {
    return Trip.update(set, {
      where: prop,
    });
  }
}
export default TripsService;
