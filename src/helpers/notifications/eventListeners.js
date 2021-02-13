/*eslint-disable*/
import eventEmitter from './eventEmitter';
import userServices from '../../services/userService';
import notificationController from '../../controllers/notifications';
const findUserById = async (id) => await userServices.findById(id);
const { notifyUser } = notificationController;
eventEmitter.on('userSignedIn', async (userInformation) => {
  console.log('^^^^^^^^^^^^^^^^^^^^^')
  const receiverInfo = await findUserById(userInformation.id);
  notifyUser({
    receiverId: receiverInfo.id,
    message: 'you have signed to barefoot nomad',
  }, receiverInfo.email);
});
