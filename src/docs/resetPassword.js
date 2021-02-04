/* eslint-disable max-len */
/**
 * @swagger
 * /api/v1/users/forgotPassword:
 *  post:
 *      tags: ["RESET PASSWORD"]
 *      summary: "forget and reset password for registed user"
 *      description: "Needed is the registered email only"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "email":
 *                 type: string
 *                 required: true
 *      responses:
 *       "200":
 *         description: "Dear ,A reset Password link has been sent to you email please go and click the link."
 *       "404":
 *         description: "Email doesn\"t exist"
 */

// reset password

/**
 * @swagger
 * /api/v1/users/resetpassword/{newToken}:
 *  put:
 *      tags: ["RESET PASSWORD"]
 *      summary: "reset password for registed user"
 *      description: "Needed is the registered password only"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: newToken
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "password":
 *                 type: string
 *                 required: true
 *      responses:
 *       "200":
 *         description: "password changed successfully"
 *       "404":
 *         description: "Email doesn\"t exist"
 */
