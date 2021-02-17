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

eventEmitter.on('userAssignedToManager', async (payload) => {
  const { lineManagerId, userId } = payload;
  const lineManagerInfo = await findUserById(lineManagerId);
  const userInfo = await findUserById(userId);
  if (userInfo) {
    notifyUser({
      receiver: userId,
      message: `Hello! ${userInfo.firstName}  You have been assigned to ${lineManagerInfo.firstName} as your line manager`,
    }, userInfo.email);
  }
  if (lineManagerInfo && (lineManagerInfo.roleId != 1) && (lineManagerInfo.roleId != 3)) {
    notifyUser({
      receiver: lineManagerId,
      message: `Hello! ${lineManagerInfo.firstName}  You have been assigned a new person ${userInfo.firstName}`,
    }, lineManagerInfo.email);
  }
});

}
}
