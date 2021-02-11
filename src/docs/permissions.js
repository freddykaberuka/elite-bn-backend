/**
 * @swagger
 * /api/v1/permissions/:
 *   get:
 *     tags:
 *       - Permissions
 *     name: Permissions
 *     summary: fetch all permissions
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
 *             description: Permissions successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
* @swagger
* /api/v1/permissions/save/:
*   post:
*     tags:
*       - Permissions
*     name: Permissions
*     summary: create Permissions
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
 *                permissionName:
 *                 type: string
 *         required:
 *                -permissionName
*     responses:
*       201:
*             description: Permissions successfully Created.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/permissions/findById/{id}:
 *   get:
 *     tags:
 *       - Permissions
 *     name: find Permission by id
 *     summary: fetch Permission by id
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
 *             description: Permissions successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
* @swagger
* /api/v1/permissions/update/{id}:
*   put:
*     tags:
*       - Permissions
*     name: update Permissions
*     summary: update Permissions
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
 *                permissionName:
 *                 type: string
 *         required:
 *                -permissionName
*     responses:
*       201:
*             description: Permissions successfully updated.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/permissions/delete/{id}:
 *   delete:
 *     tags:
 *       - Permissions
 *     name: delete Permissions
 *     summary: delete Permissions
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
 *             description: Permissions successfully deleted.
 *       401:
 *             description: unauthorized
 * */
