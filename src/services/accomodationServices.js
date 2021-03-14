import { Op } from 'sequelize';
import models from '../models';

const {
  Accomodations, locations,
} = models;
/**
 * @exports
 * @class AccomodationsService
 */
class AccomodationsService {
  /**
     * create new user
     * @static createAccomodations
     * @param {object} newAccomodations
     * @memberof AccomodationsService
     * @returns {object} data
     */
  static create(newAccomodations) {
    return Accomodations.create(newAccomodations);
  }

  static updateAtt(set, prop) {
    return Accomodations.update(set, {
      where: prop,
    });
  }

  static incrementRooms(id) {
    return Accomodations.increment({ roomsLeft: 1 }, { where: { id } });
  }

  static getAccomodations() {
    return Accomodations.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
  }

  /**
     * Find a User in storage using login credentials.
     * @param {*} prop HTTP request
     * @returns {*} JSON data
     */
  static findByProp(prop) {
    return Accomodations.findAll({
      where: prop,
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
      },
    });
  }

  static findById(modelId) {
    return Accomodations.findOne({
      where: { id: modelId },
    });
  }

  static findByIdAndLocation(Id, destination) {
    return Accomodations.findOne({
      where: {
        id: Id,
        location_id: {
          [Op.in]: destination,
        },
      },
    });
  }

  static deleteAccomodation(modelId) {
    return Accomodations.destroy({ where: { id: modelId } });
  }

  static findByAccomoId(prop) {
    return Accomodations.findAll({
      where: { id: prop },
      attributes: {
        exclude: ['facilities', 'location_id', 'description', 'updatedAt', 'createdAt'],
      },
    });
  }

  static findWithoutId(ids) {
    return Accomodations.findAll({
      where: {
        [Op.not]: { id: ids }
      }
    });
  }
}
export default AccomodationsService;
