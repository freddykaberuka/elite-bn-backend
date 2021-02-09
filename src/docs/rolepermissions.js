/**
 * @swagger
 * /api/v1/rolesPermissions/:
 *   get:
 *     tags:
 *       - Rolepermission
 *     name: rolepermission
 *     summary: fetch all role_permissions
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: role_permissions successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /api/v1/rolesPermissions/save/:
 *   post:
 *     tags:
 *       - Rolepermission
 *     name: Rolepermission
 *     summary: create role_permission
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                role_id:
 *                 type: string
 *                permission_id:
 *                 type: string
 *         required:
 *                -role_id
 *                -permission_id
 *     responses:
 *       201:
 *             description: rolepermission successfully Created.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/rolesPermissions/findById/{id}:
 *   get:
 *     tags:
 *       - Rolepermission
 *     name: find rolepermission by id
 *     summary: fetch role_permissions id
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: role_permissions successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /api/v1/rolesPermissions/update/{id}:
 *   patch:
 *     tags:
 *       - Rolepermission
 *     name: update role_permission
 *     summary: update role_permission
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                role_id:
 *                 type: string
 *                permission_id:
 *                 type: string
 *         required:
 *                -role_id
 *                -permission_id
 *     responses:
 *       201:
 *             description: rolepermission successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/rolesPermissions/delete/{id}:
 *   delete:
 *     tags:
 *       - Rolepermission
 *     name: delete rolepermission
 *     summary: delete role_permissions
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: role_permissions successfully deleted.
 *       401:
 *             description: unauthorized
 * */