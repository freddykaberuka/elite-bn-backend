import models from '../models';

const { Permission } = models;
class PermissionService {
  static findPermIbByPermName(permName) {
    return Permission.findOne({ where: { permissionName: permName } });
  }

  static createPermission(newPermission) {
    return Permission.create(newPermission);
  }

  static getAllPermissions() {
    return Permission.findAll();
  }

  static findPermissionById(modelId) {
    return Permission.findOne({
      where: { id: modelId },
    });
  }

  static updatePerm(set, prop) {
    return Permission.update(set, {
      where: prop,
    });
  }

  static deletePermission(modelId) {
    return Permission.destroy({
      where: { id: modelId },
    });
  }
}
export default PermissionService;
