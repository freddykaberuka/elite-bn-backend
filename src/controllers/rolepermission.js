import Util from '../helpers/utils';
import rolePermissionService from '../services/rolepermServices';

const util = new Util();
export default class RolePermission {
  static async allRolePermission(req, res) {
    try {
      const rolesPerm = await rolePermissionService.getRolePermissions();
      util.setSuccess(200, 'all roles Permissions', rolesPerm);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Unable to retrieve all rolesPermissions');
      return util.send(res);
    }
  }

  static async saveRolePerm(req, res) {
    try {
      const newrolePermission = {
        role_id: req.body.role_id,
        permission_id: req.body.permission_id,
      };
      const createdRoleperm = await rolePermissionService.createRolePermission(newrolePermission);
      util.setSuccess(200, 'Role_permission permission created', createdRoleperm);
      return util.send(res);
    } catch (error) {
       util.setError(500, 'Role_permission not created');
       return util.send(res);
     
    }
  }

  static async findRolePerm(req, res) {
    try {
      const modelId = req.params.id;
      const singleRole = await rolePermissionService.findById(modelId);
      util.setSuccess(200, 'Successfully retrieved Role_permission', singleRole);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Role_permission was not retrived');
      return util.send(res);
    }
  }


  static async updateRolePerm(req, res) {
    try {
      const updateRole = {
        role_id: req.body.role_id,
        permission_id: req.body.permission_id,
      };
      const prop = {
        id: req.params.id,
      };
      const updatedRole = await rolePermissionService.updateAtt(updateRole, prop);
      util.setSuccess(200, 'Role_permission updated successfuly', updatedRole);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Role_permissione was not updated');
      return util.send(res);
    }
  }

  static async deleteRolePerm(req, res) {
    try {
      const modelId = req.params.id;
      const deletedRole = await rolePermissionService.deletePermission(modelId);
      util.setSuccess(200, 'Role_permission successfully deleted', deletedRole);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Role_permission was not deleted');
      return util.send(res);
    }
  }
}
