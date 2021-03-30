/* eslint-disable */
import tripServices from "../services/tripServices";
import eventEmitter from "../helpers/notifications/eventEmitter";
import Util from "../helpers/utils";
import { Listner } from "../helpers/notifications/eventListeners";

Listner.eventTripListeners();
Listner.editListener();
Listner.cancelTripListener();
Listner.rejectListener();
Listner.approveListener();

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
      const lineManagerId = req.body.lineManager;
      eventEmitter.emit("TripRequest", {
        lineManagerId,
        id,
      });
      util.setSuccess(201, "You have successfully created a trip", trip);
      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }

  static async findAllTrips(req, res) {
    const { id, roleId } = req.userInfo;
    let { page, itemsPerPage } = req.params;
    page = page > 0 ? page : 1;
    itemsPerPage = itemsPerPage > 0 ? itemsPerPage : 20;
    const itemsToSkip = (page - 1) * itemsPerPage;
    console.log(itemsToSkip, itemsPerPage);
    const isManager = roleId === 3;
    const condition = isManager ? { lineManager: id } : { user_id: id };
    tripServices
      .getAllTripsByRole(condition, itemsToSkip, itemsPerPage)
      .then((trips) => {
        util.setSuccess(200, "You have successfully fetched the trips", trips);
        return util.send(res);
      })
      .catch(() => {
        util.setError(500, "Something is wrong");
        return util.send(res);
      });
  }

  static async cancelRequest(req, res) {
    const { id: userId } = req.userInfo;
    const { id: tripId } = req.params;
    const trip = await tripServices.findById(tripId);
    if (!trip) {
      util.setError(501, `Trip::${tripId} not found`);
      return util.send(res);
    }
    if (trip.user_id !== userId && trip.lineManager !== userId) {
      util.setError(401, "You don't own this trip.");
      return util.send(res);
    }
    if (trip.status !== "pending") {
      util.setError(409, `You can't cancel trip::${tripId}`);
      return util.send(res);
    }

    tripServices
      .updateTrip({ status: "canceled" }, { id: tripId })
      .then((result) => {
        const lineManagerId = req.body.lineManager;
        const tripId = trip.id;

        const id = trip.user_id;
        eventEmitter.emit("CancelTrip", {
          lineManagerId,
          id,
          tripId,
        });
        util.setSuccess(201, "You have successfully canceled the trip", result);
        return util.send(res);
      })
      .catch(() => {
        util.setError(500, "Something is wrong");
        return util.send(res);
      });
  }

  static async approveRequest(req, res) {
    const { id: userId } = req.userInfo;
    const { id: tripId } = req.params;
    const trip = await tripServices.findById(tripId);
    if (!trip) {
      util.setError(501, `Trip::${tripId} not found`);
      return util.send(res);
    }
    if (trip.lineManager !== userId) {
      util.setError(401, "Trip was not reported to you.");
      return util.send(res);
    }
    tripServices
      .updateTrip({ status: "approved" }, { id: tripId })
      .then((result) => {
        const tripId = trip.id;
        const lineManagerId = trip.lineManager;
        const id = trip.user_id;
        eventEmitter.emit("ApproveTrip", {
          lineManagerId,
          id,
          tripId,
        });
        util.setSuccess(201, "You have successfully approved the trip", result);
        return util.send(res);
      })
      .catch(() => {
        util.setError(500, "Something is wrong");
        return util.send(res);
      });
  }

  static async rejectRequest(req, res) {
    const { id: userId } = req.userInfo;
    const { id: tripId } = req.params;
    const trip = await tripServices.findById(tripId);
    if (!trip) {
      util.setError(501, `Trip::${tripId} not found`);
      return util.send(res);
    }
    if (trip.lineManager !== userId) {
      util.setError(401, "Trip was not reported to you.");
      return util.send(res);
    }
    tripServices
      .updateTrip({ status: "rejected" }, { id: tripId })
      .then((result) => {
        const tripId = trip.id;
        const lineManagerId = trip.lineManager;
        const id = trip.user_id;
        eventEmitter.emit("RejectTrip", {
          lineManagerId,
          id,
          tripId,
        });
        util.setSuccess(201, "You have successfully rejected the trip", result);
        return util.send(res);
      })
      .catch(() => {
        util.setError(500, "Something is wrong");
        return util.send(res);
      });
  }

  static async updateTrip(req, res) {
    const { id: userId } = req.userInfo;
    const { id: tripId } = req.params;
    const trip = await tripServices.findById(tripId);
    if (!trip) {
      util.setError(501, `Trip::${tripId} not found`);
      return util.send(res);
    }
    if (trip.user_id !== userId && trip.lineManager !== userId) {
      util.setError(401, "You don't own this trip.");
      return util.send(res);
    }
    if (trip.status !== "pending") {
      util.setError(409, `You can't update trip::${tripId}`);
      return util.send(res);
    }
    const data = {
      orgin: req.body.orgin || trip.orgin,
      destination: req.body.destination || trip.destination,
      reason: req.body.reason || trip.reason,
      type: req.body.type || trip.type,
      returnDate: req.body.returnDate || trip.returnDate,
      accomodationId: req.body.accomodationId || trip.accomodationId,
      lineManager: req.body.lineManager || trip.lineManager,
      status: trip.status,
    };

    tripServices
      .updateTrip(data, { id: tripId })
      .then((result) => {
        const tripId = trip.id;
        const lineManagerId = trip.lineManager;
        const id = trip.user_id;
        eventEmitter.emit("EditTrip", {
          lineManagerId,
          id,
          tripId,
        });
        util.setSuccess(201, "You have successfully edited the trip", result);
        return util.send(res);
      })
      .catch(() => {
        util.setError(500, "Something is wrong");
        return util.send(res);
      });
  }
}

export default TripController;
