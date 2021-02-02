import jwtDecode from 'jwt-decode';
import Util from '../helpers/utils';
import rolePermServices from '../services/rolePermServices';
import permissionServices from '../services/permissionServices';

const util = new Util();
class authorization {
  static async userAuthorize(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
      util.setError(401, 'Token Required');
      return util.send(res);
    }
    const token = authToken.replace('Bearer ','');
    const userRoleId = jwtDecode(token).roleId;
    if(userRoleId == 1){
      next();
    }
    const { permission_name } = authToken;
    const permissions = await rolePermServices.findPermByRolrId(userRoleId);
    let permissionIds =[];
    permissions.forEach(element => {
      permissionIds.push(element.permission_id);
    }); 
    
    const permission = await permissionServices.findPermIbByPermName(permission_name)
    const permissionId = permission.id;
    const allowed = permissionIds.indexOf(permissionId);
    
    if (allowed == -1) {
      util.setError(401,"you are not allowed to perform this task")
      return util.send(res)
    }
    next();
  }
}

export default authorization;
