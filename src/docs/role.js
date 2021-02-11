/**
 * @swagger
 * /api/v1/roles/:
 *   get:
 *     tags:
 *       - roles
 *     name: roles
 *     summary: fetch all roles
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
 *             description: roles successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
* @swagger
* /api/v1/roles/save/:
*   post:
*     tags:
*       - roles
*     name: roles
*     summary: create roles
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
 *                name:
 *                 type: string
 *         required:
 *                -name
*     responses:
*       201:
*             description: roles successfully Created.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/roles/findById/{id}:
 *   get:
 *     tags:
 *       - roles
 *     name: find role by id
 *     summary: fetch role by id
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
 *             description: roles successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /api/v1/roles/findByname/{name}:
 *   get:
 *     tags:
 *       - roles
 *     name: find roles by name
 *     summary: fetch role by name
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: name
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: roles successfully fetched.
 *       401:
 *             description: unauthorized
 * */

/**
* @swagger
* /api/v1/roles/update/{id}:
*   put:
*     tags:
*       - roles
*     name: update roles
*     summary: update roles
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
 *                name:
 *                 type: string
 *         required:
 *                -name
*     responses:
*       201:
*             description: roles successfully updated.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/roles/delete/{id}:
 *   delete:
 *     tags:
 *       - roles
 *     name: delete roles
 *     summary: delete roles
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
 *             description: roles successfully deleted.
 *       401:
 *             description: unauthorized
 * */
