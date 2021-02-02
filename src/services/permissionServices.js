import models from '../models';

const { Permission } = models;
class PermissionService {
  static findPermIbByPermName(permName) {
    return Permission.findOne({where: {permissionName : permName}});
  }

  
}
export default PermissionService;
