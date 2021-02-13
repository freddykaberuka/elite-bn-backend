/*eslint-disable*/ 
import emailSender from '../services/emailService';
import notificationsServices from '../services/notificationsServices';
import renderEmail from '../services/template/notificationTemplate';
import Util from '../helpers/utils';


const util = new Util();

export default class Notifications {
    static async notifyUser(notification, email) {
        console.log('************************', notification)
        await notificationsServices.createNotification(notification);
        const subject = 'Notification from barefoot Nomad';
        console.log('************************', subject)
        emailSender(renderEmail(notification.message), subject, email);
      
}
};
