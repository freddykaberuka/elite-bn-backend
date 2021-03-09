import { Op } from 'sequelize';
import models from '../models';
// eslint-disable-next-line import/no-duplicates

const {
  Locations,
} = models;
/**
 * @exports
 * @class Location
 */
class Location {
  /**
     * create new user
     * @static createlocation
     * @param {object} newlocation
     * @memberof locationervice
     * @returns {object} data
     */
  static createlocation(newlocation) {
    return Locations.create(newlocation);
  }

  static updateAtt(set, prop) {
    return Locations.update(set, {
      where: prop,
    });
  }

  static getlocation() {
    return Locations.findAll();
  }

  /**
     * Find a User in storage using login credentials.
     * @param {*} prop HTTP request
     * @returns {*} JSON data
     */
  static findByName(prop) {
    return Locations.findOne({
      where: prop,
    });
  }

  static findById(modelId) {
    return Locations.findOne({
      where: { id: modelId },
    });
  }

  static getLocations(locations) {
    return Locations.findAll({
      where: {
        id: {
          [Op.in]: locations,
        },
      },
    });
  }

  static deletelocation(modelId) {
    return Locations.destroy({ where: { id: modelId } });
  }
}
export default Location;
