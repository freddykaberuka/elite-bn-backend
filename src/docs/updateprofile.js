/**
* @swagger
* /api/v1/users/updateProfile:
*   patch:
*     tags:
*       - Users
*     name: Profile update
*     summary: update the user profile
*     consumes:
*        - multipart/form-data
*     parameters:
*       - name: Authorization
*         in: header
*         required: true
*       - in: formData
*         name: firstName
*         type: string
*         required: true
*       - in: formData
*         name: lastName
*         type: string
*         required: true
*       - in: formData
*         name: profilePicture
*         type: file
*         required: true
*       - in: formData
*         name: preferedLanguage
*         type: string
*         required: true
*       - in: formData
*         name: officeAddress
*         type: string
*         required: true
*     responses:
*       201:
*             description: Blog successfully Created.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */

/**
 * @swagger
 * /api/v1/users/profile/{id}:
 *   get:
 *     tags:
 *       - Users
 *     name: Get user profile
 *     summary: retrieve user profile
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Users successfully fetched.
 *       401:
 *             description: unauthorized
 * */
