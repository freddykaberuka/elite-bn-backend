import models from '../models';

const { Role } = models;

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
    return Role.findAll();
  }

  static findByName(prop) {
    return Role.findOne({
      where: prop,
    });
  }

  static findById(modelId) {
    return Role.findOne({
      where: { id: modelId },
    });
  }

  static deleteRole(modelId) {
    return Role.destroy(modelId);
  }
}
export default RoleService;
