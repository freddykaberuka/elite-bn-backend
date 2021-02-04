 /**
 * @swagger
 * /api/v1/users/signup:
 *  post:
 *      summary: "Creates an account for barefoot nomad"
 *      description: "Needed is youe first and last name, your email and password"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "firstName":
 *                 type: string
 *                 required: true
 *                "lastName":
 *                 type: string
 *                 required: true
 *                "email":
 *                 type: string
 *                 required: true
 *                "password":
 *                 type: string
 *                 required: true
 *               
 *        
 *               
 *      responses:
<<<<<<< HEAD
<<<<<<< HEAD
 *       "201":
 *         description: "Account created"  
=======
 *       "200":
 *         description: Success  
>>>>>>> d9c1ece (ft-logout)
=======
 *       "201":
 *         description: "Account created"  
>>>>>>> df7af2a (Matching the source code)
 *       "403":
 *         description: "Account creation failed"
 *            
 */
