/*eslint-disable*/
import eventEmitter from './eventEmitter';
import userServices from '../../services/userService';
import notificationController from '../../controllers/notifications';

const findUserById = async (id) => await userServices.findById(id);
const { notifyUser } = notificationController;
export class Listner{
static eventListners(){
eventEmitter.on('userSignedIn', async (userInformation) => {
  console.log('^^^^^^^^^^^^^^^^^^^^^2')
  const receiverInfo = await findUserById(userInformation.id);
  notifyUser({
    receiverId: receiverInfo.id,
    message: 'you have signed to barefoot nomad app',
  }, receiverInfo.email);
});
}
}
