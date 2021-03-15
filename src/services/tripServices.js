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
}
export default TripsService;
