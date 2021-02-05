/**
 * @swagger
 * /api/v1/locations/read/:
 *   get:
 *     tags:
 *       - Locations
 *     name: Locations
 *     summary: fetch all available locations
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Fetch all available locations.
 *       500:
 *             description: Server error
 * */
/**
* @swagger
* /api/v1/locations/create/:
*   post:
*     tags:
*       - Locations
*     name: Locations
*     summary: create Locations
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
*     responses:
*       201:
*             description: You have successfully created a location.
*       500:
*             description: Server error.
* */
/**
 * @swagger
 * /api/v1/locations/read/{location_id}:
 *   get:
 *     tags:
 *       - Locations
 *     name: find Locations by id
 *     summary: fetch Locations by id
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Locations.
 *       500:
 *             description: Server error
 * */
/**
 * @swagger
 * /api/v1/locations/delete/{locations}:
 *   delete:
 *     tags:
 *       - Locations
 *     name: delete Locations
 *     summary: delete Locations
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Locations successfully deleted.
 *       500:
 *             description: Server error
 * */
/**
 * @swagger
 * /api/v1/locations/delete/{location}:
 *   patch:
 *     tags:
 *       - Locations
 *     name: update Locations
 *     summary: update Locations
 *     consumes:
 *        - application/json
 *     responses:
 *       201:
 *             description: Locations successfully updated.
 *       500:
 *             description: Server error
 * */
