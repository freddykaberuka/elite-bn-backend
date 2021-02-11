/*eslint-disable */
import { Op } from 'sequelize';
import models from '../models';

const {
  Booking
} = models;
/**
 * @exports
 * @class Location
 */
class Location {
  /**
     * create new user
     * @static createbooking
     * @param {object} newbooking
     * @memberof bookingervice
     * @returns {object} data
     */
  static createbooking(newbooking) {
    return Booking.create(newbooking);
  }

  static updateAtt(set, prop) {
    return Booking.update(set, {
      where: prop,
    });
  }

  static getbooking() {
    return Booking.findAll();
  }

  static getMultipleBooking(conditions) {
    return Booking.findAll({
      limit: null,
      where: [conditions]
    });
  }
  static getIdsOnCondition(conditions) {
    return Booking.findAll({
      attributes:['id'],
      where: [conditions]
    });
  }

  /**
     * Find a User in storage using login credentials.
     * @param {*} prop HTTP request
     * @returns {*} JSON data
     */
  static findByProp(prop) {
    return Booking.findOne({
      where: prop,
    });
  }

  static findById(modelId) {
    return Booking.findOne({
      where: { id: modelId },
    });
  }

  static getBooking(bookings) {
    return Booking.findAll({
      where: {
        id: {
          [Op.in]: bookings,
        },
      },
    });
  }
  static getWithoutUser(userId){
    return Booking.findAll({
      where: {
        [Op.not]: { UserId: userId}
      }
    });
  }
  static findWithAnd(conditions) {
    return Booking.findAll({
      where: {
        [Op.and]: [conditions]
      }
    });
  }

  static deletebooking(modelId) {
    return Booking.destroy({ where: { id: modelId } });
  }
}
export default Location;
