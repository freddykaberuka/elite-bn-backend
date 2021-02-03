 /**
 * @swagger
 * /api/v1/users/logout:
 *  get:
 *      summary: "Logs out the user from barefoot nomad"
 *      description: "Needed is your token"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: token
 *         in: header         
 *      responses:
 *       "200":
 *         description: Success  
 *       "403":
 *         description: "Logout unsuccesful"
 *       "500":
 *         description: "Unknown error"
 *            
 */
