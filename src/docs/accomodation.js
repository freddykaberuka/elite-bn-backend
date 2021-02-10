/**
 * @swagger
 * /api/v1/accomodations/read/:
 *   get:
 *     tags:
 *       - Accomodations
 *     name: Accomodations
 *     summary: fetch all available accomodations
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Fetch all available accomodations.
 *       500:
 *             description: Server error
 * */
/**
* @swagger
* /api/v1/accomodations/create/:
*   post:
*     tags:
*       - Accomodations
*     name: Accomodations
*     summary: create Accomodations
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                description:
 *                 type: string
 *                location_id:
 *                 type: string
 *                cost:
 *                 type: integer
 *                roomSize:
 *                 type: integer
 *         required:
 *                -permissionName
*     responses:
*       201:
*             description: You have successfully created an accomodation.
*       500:
*             description: Server error.
* */
/**
 * @swagger
 * /api/v1/Accomodations/read/{location_id}:
 *   get:
 *     tags:
 *       - Accomodations
 *     name: find Accomodations by id
 *     summary: fetch Accomodations by id
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Accomodations.
 *       500:
 *             description: Server error
 * */
/**
 * @swagger
 * /api/v1/accomodations/delete/{accomodation}:
 *   delete:
 *     tags:
 *       - Accomodations
 *     name: delete Accomodations
 *     summary: delete Accomodations
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Accomodations successfully deleted.
 *       500:
 *             description: Server error
 * */
/**
 * @swagger
 * /api/v1/accomodations/delete/{accomodation}:
 *   patch:
 *     tags:
 *       - Accomodations
 *     name: update Accomodations
 *     summary: update Accomodations
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Accomodations successfully updated.
 *       500:
 *             description: Server error
 * */
