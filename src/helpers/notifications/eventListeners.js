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
      receiverId: userInfo.id,
      subject: 'Assigned To A Manager: Barefoot App',
      message: `Dear ${userInfo.firstName} ${userInfo.lastName}, 
      
                You have been assigned to ${lineManagerInfo.firstName} ${lineManagerInfo.lastName} as your line manager`,
    }, userInfo.email);
  }
  if (lineManagerId != tokenId ) {
    notifyUser({
      receiverId: lineManagerInfo.id,
      subject: 'Assigned To A User: Barefoot App',
      message: `Dear ${lineManagerInfo.firstName} ${lineManagerInfo.lastName},

                You have been assigned a new user ${userInfo.firstName} ${userInfo.lastName} `,
    }, lineManagerInfo.email);
  } else{
    notifyUser({
      receiverId: lineManagerInfo.id,
      subject: 'Assigned To A User: Barefoot App',
      message: `Dear ${lineManagerInfo.firstName} ${lineManagerInfo.lastName},

                You have assigned yourself a new user ${userInfo.firstName} ${userInfo.lastName} `,
    }, lineManagerInfo.email);
  }
});

}
}
