/*eslint-disable */
import models from '../models/index';
const  Rating  = models.Rating;
/**
 * @exports
 * @class RatingService
 */
class RatingService {
  /**
   * create new user
   * @static createuser
   * @param {object} newuser
   * @memberof userService
   * @returns {object} data
   */
  static addRating(newRating) {
    return Rating.create(newRating);
  }
  static findByProp(prop) {
    return Rating.findAll({
      where: prop,
    });
  }
 
  static updateAtt(set, prop) {
    return Rating.update(set, {
      where: prop,
    });
  }
  static getRating(id) {
    return Rating.findAll(
      {
        where: {
          id,
          isVerified: 'true',
        },
        attributes: ['id', 'email', 'lineManager', 'isVerified'],
      },
    );
  }
//new
  static getRating() {
    return Rating.findAll(
      {
        attributes: ['id', 'accomodationId', 'rating'],
      },
    );
  }

  /**
   * Find a Rating in storage using login credentials.
   * @param {*} prop HTTP request
   * @returns {*} JSON data
   */
  static findByEmail(prop) {
    return Rating.findOne({
      where: { email: prop },
    });
  }
  static findById(modelId) {
    return Rating.findOne({
      where: { id: modelId },
    });
  }
  static drop(userEmail){
    return Rating.drop({where: {
      email: userEmail
    }})
  }
  static deleteById(userId){
    return Rating.destroy({
      where: { id: userId }
    })
  }
  static findBylineManagerId(lineManagerId){
    return Rating.findOne({where:
    {id: lineManagerId},
  });

  }
}
export default RatingService;
