/*eslint-disable */
import models from '../models/index';
const  Review  = models.Review;
/**
 * @exports
 * @class ReviewService
 */
class ReviewService {
  /**
   * create new user
   * @static createuser
   * @param {object} newuser
   * @memberof userService
   * @returns {object} data
   */
  static addReview(newReview) {
    return Review.create(newReview);
  }
  static findByProp(prop) {
    return Review.findAll({
      where: prop,
    });
  }
 
  static updateAtt(set, prop) {
    return Review.update(set, {
      where: prop,
    });
  }
  static getReview(id) {
    return Review.findAll(
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
  static getReview() {
    return Rating.findAll(
      {
        attributes: ['id', 'accomodationId', 'rating', 'review'],
      },
    );
  }

  /**
   * Find a Review in storage using login credentials.
   * @param {*} prop HTTP request
   * @returns {*} JSON data
   */
  static findByEmail(prop) {
    return Review.findOne({
      where: { email: prop },
    });
  }
  static findById(modelId) {
    return Review.findOne({
      where: { id: modelId },
    });
  }
  static drop(userEmail){
    return Review.drop({where: {
      email: userEmail
    }})
  }
  static deleteById(userId){
    return Review.destroy({
      where: { id: userId }
    })
  }
  static findBylineManagerId(lineManagerId){
    return Review.findOne({where:
    {id: lineManagerId},
  });

  }
}
export default ReviewService;
