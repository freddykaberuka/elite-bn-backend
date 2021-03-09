/**
 * @swagger
 * /api/v1/users/assign/manager:
 *    put:
 *      tags: ["ASSIGN USER TO MANAGER"]
 *      summary: "user assign to a manager"
 *      description: "user assign to a manager by selecting user and manager"
 *      consumes:
 *       - application/json
 *      parameters:
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
 *                "lineManagerId":
 *                 type: integer
 *                 required: true
 *                "id":
 *                 type: integer
 *                 required: true
 *      responses:
 *       "200":
 *         description: "user assigned to a manager successful"
 *       "500":
 *         description: "server error"
 */

// get verified user with assigned manager

/**
 * @swagger
 * /api/v1/users/getUser:
 *  get:
 *      tags: ["ASSIGN USER TO MANAGER"]
 *      summary: "get verified user with assigned manager"
 *      description: "get verified user with assigned manager"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *      responses:
 *       "200":
 *         description: "vierified user assigned and their manager"
 *       "500":
 *         description: "server error"
 */
