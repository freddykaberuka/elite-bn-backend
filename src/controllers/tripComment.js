/* eslint-disable consistent-return */
import models from '../models';
import Util from '../helpers/utils';

const util = new Util();

class Comment {
  // create a comment
  static async createComment(req, res) {
    try {
      const tripId = req.params.id;
      const { id } = req.userInfo;

      const trip = await models.Trip.findOne({ where: { id: tripId } });
      if (!trip) {
        util.setError(404, 'the trip does not exist');
        return util.send(res);
      }
      const saveComment = await models.comment.create({
        ...req.body,
        userId: id,
        tripId,
      });
      util.setSuccess(201, 'You have successfully created a comment', saveComment);
      return util.send(res);
    } catch (error) {
      util.setError(400, 'the trip does not belong to you');
      return util.send(res);
    }
  }

  // delete a comment
  static async deleteComment(req, res) {
    const { id } = req.params;
    models.comment.destroy({ where: { id } })
      .then((num) => {
        if (num === 1) {
          util.setError(200, { message: `Successfully Deleted comment with id=${id}` });
          return util.send(res);
        }
        util.setError(404, { message: `Can not Delete comment with id=${id}.maybe Not Found in Database'` });
        return util.send(res);
      });
  }

  // get all comments
  static async list(req, res) {
    // const { id } = req.params;
    const { tripId } = req.params;
    const trip = await models.Trip.findOne({ where: { id: tripId } });
    const comment = await models.comment.findOne({ where: { tripId } });
    if ((!trip) || (!comment)) {
      return res.status(404).send({ status: 404, error: `One of id from Trips : "${id}" or tripId from comments "${tripId}" does not exist !` });
    }
    // if (id !== tripId) {
    //   return res.status(404).send({ status: 404, error: `The Trip Identification(from Trips): ${id} does not match to the specified trip Id from Comments: ${tripId}!` });
    // }
    return models.comment.findAll({ where: { tripId } })
      // eslint-disable-next-line no-shadow
      .then((models) => res.status(200).send(models));
  }
}
export default Comment;
