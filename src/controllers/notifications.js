/*eslint-disable*/ 
import notificationsServices from '../services/notificationsServices';
import emailSender from '../services/emailService';
import { renderEmail } from '../services/template/notificationTemplate';
import Util from '../helpers/utils';


const util = new Util();

export default class Notifications {
    static async notifyUser(notification, email) {
        await notificationsServices.createNotification(notification);
        emailSender(renderEmail(notification.message), notification.subject, email);
}
static async showAllNotifications(req, res) {
    try {
      const { id } = req.userData;
      const notifications = await notificationsServices.getNotifications(id);
      util.setSuccess(200, 'Notifications', notifications);
      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }

  static async readOneNotification(req, res) {
    try {
      const { id } = req.userData;
      const { notificationId } = req.params;
      const notifications = await notificationsServices.getOne({ receiverId: id, id: notificationId });
      await notificationsServices.update({ receiverId: id, id: notificationId });
      util.setSuccess(200, 'Notifications', notifications);
      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      return util.send(res);
    }
  }
};
