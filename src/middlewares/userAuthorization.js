import jwtDecode from 'jwt-decode';
import util from '../helpers/utils';
import roleService from '../services/roleService';

class authorization {
  static async userAuthorize(req, res, next) {
    const authToken = req.headers;
    const { permissionname } = authToken;
    console.log('.....................................');
    console.log(permissionname);
    console.log('.....................................');
    if (!authToken) {
      util.setError(500, 'Access denied');
      return util.send(res);
    }
    const token = authToken.authorization.replace('Bearer ', '');
    const userRoleId = jwtDecode(token).roleId;
    const permissions = await roleService.findById(3);
    return res.send(permissions);
    
    return res.send('workin');
  }
}

export default authorization;
