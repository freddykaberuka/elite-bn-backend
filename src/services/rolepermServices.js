import models from '../models';

const { rolepermission } = models;

/**
 * @exports
 * @class PermissionService
 */
class rolePermService {
  /**
   * create new user
   * @static createrolePermission
   * @param {object} newrolePermission
   * @memberof permissionService
   * @returns {object} data
   */
  static getRolePermissions() {
    return rolepermission.findAll();
  }

  static findPermByRole(roleId) {
    return rolepermission.findOne({
      where: { role_id: modelId }
    });
  }

  static createRolePermission(newrolePermission) {
    return rolepermission.create(newrolePermission);
  }

  static updateAtt(set, prop) {
    return rolepermission.update(set, {
      where: prop,
    });
  }

  /**
   * Find a User in database using login credentials.
   * @returns {*} JSON data
   */

  static findById(modelId) {
    return rolepermission.findOne({
      where: { id: modelId },
    });
  }

  static findPermByRolrId(roleId) {
    return rolepermission.findAll({
      where: { role_id: roleId },
    });
  }

  static deletePermission(modelId) {
    return rolepermission.drop({
      where: { id: modelId },
    });
  }
}
export default rolePermService;
