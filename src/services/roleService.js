import models from '../models';

const { Role } = models;
const { Permission } = models;
class RoleService {
  static createRole(newRole) {
    return Role.create(newRole);
  }

  static updateAtt(set, prop) {
    return Role.update(set, {
      where: prop,
    });
  }

  static getRoles() {
    return Role.findAll({
      include: [
        {
          model: Permission,
          as: 'permissions'
        },
      ],
    });
  }

  static findByName(prop) {
    return Role.findOne({
      where: prop,
    });
  }

  static findById(modelId) {
    return Role.findByPk(modelId, {
      include: [
        {
          model: Permission,
          as: 'permissions'
        },
      ],
    });
  }

  static deleteRole(modelId) {
    return Role.destroy(modelId);
  }
}
export default RoleService;
