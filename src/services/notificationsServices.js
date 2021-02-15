/*eslint-disable*/
import models from '../models';

const { notifications } = models;
/**
 * @exports
 * @class notificationservice
 */
class notificationservice {
  /**
   * create new user
   * @static createNotification
   * @param {object} newNotifications
   * @memberof notificationservice
   * @returns {object} data
   */
  static createNotification(newNotifications) {
    return notifications.create(newNotifications);
  }

  static getNotifications(UserId) {
    return notifications.findAll({
      where: {
        receiverId: UserId,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
  }

  static getOne(notification) {
    return notifications.findOne({
      where: notification,
      attributes: {
        exclude: ['receiverId', 'createdAt', 'updatedAt', 'isRead'],
      }
    });
  }

  static update(notification) {
    return notifications.update({ isRead: true }, {
      where: notification,
    });
  }
}
export default notificationservice;