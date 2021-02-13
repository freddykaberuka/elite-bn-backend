import Util from '../helpers/utils';
import permissionServices from '../services/permissionServices';

const util = new Util();
export default class Permission {
  static async createPermission(req, res) {
    try {
      const { permissionName } = req.body;
      const createdPermission = await permissionServices.createPermission({ permissionName });
      util.setSuccess(200, 'Permission created', createdPermission);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'permission not created');
      return util.send(res);
    }
  }

  static async getAllPermission(req, res) {
    try {
      const permissions = await permissionServices.getAllPermissions();
      util.setSuccess(200, 'all permissions', permissions);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Unable to retrieve all permissions');
      return util.send(res);
    }
  }

  static async findPermissionById(req, res) {
    try {
      const { id } = req.params;
      const singlePermission = await permissionServices.findPermissionById(id);
      util.setSuccess(200, 'Successfully retrieved permission', singlePermission);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Sorry Permission was not retrived');
      return util.send(res);
    }
  }

  static async updatePermission(req, res) {
    try {
      const { permissionName } = req.body;
      const { id } = req.params;
      const updatedPermission = await permissionServices.updatePerm({ permissionName }, { id });
      util.setSuccess(200, 'Permission updated successfuly', updatedPermission);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Sorry Permission not deleted');
      return util.send(res);
    }
  }

  static async deletePermission(req, res) {
    try {
      const { id } = req.params;
      const deletedPermission = await permissionServices.deletePermission(id);
      util.setSuccess(200, 'Permission deleted successfully', deletedPermission);
      return util.send(res);
    } catch (error) {
      util.setError(500, 'Sorry Permission was not deleted');
      return util.send(res);
    }
  }
}
