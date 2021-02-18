/*eslint-disable*/
import eventEmitter from './eventEmitter';
import userServices from '../../services/userService';
import notificationController from '../../controllers/notifications';

const findUserById = async (id) => await userServices.findById(id);
const { notifyUser } = notificationController;
export class Listner{
static eventListners(){
eventEmitter.on('userAssignedToManager', async (payload) => {
  const { lineManagerId, id, tokenId } = payload;
  const lineManagerInfo = await findUserById(lineManagerId);
  const userInfo = await findUserById(id);
  if (userInfo) {
    notifyUser({
      receiver: id,
      message: `Hello! ${userInfo.firstName} ${userInfo.lastName}  You have been assigned to ${lineManagerInfo.firstName} ${lineManagerInfo.lastName} as your line manager`,
    }, userInfo.email);
  }
  if (lineManagerId != tokenId ) {
    notifyUser({
      receiver: lineManagerId,
      message: `Hello! ${lineManagerInfo.firstName} ${lineManagerInfo.lastName}  You have been assigned a new person ${userInfo.firstName} ${userInfo.lastName} `,
    }, lineManagerInfo.email);
  }
});

}
}
