/**
 * @swagger
 * /api/v1/trips/:
 *   post:
 *     tags:
 *       - Trips
 *     name: save trip
 *     summary: create trip request
 *     consumes:
 *        - application/json
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
 *                  type: string
 *                orgin:
 *                  type: string
 *                destination:
 *                  type: integer
 *                reason:
 *                  type: string
 *                type:
 *                  type: string
 *                returnDate:
 *                  type: string
 *                accomodationId:
 *                  type: integer
 *                lineManager:
 *                  type: integer
 *     responses:
 *       201:
 *             description: Trip request created.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unAuthorized
 * */

// get travel requests

/**
 * @swagger
 * /api/v1/trips/{page}/{itemsPerPage}/:
 *  get:
 *      tags:
 *       - Trips
 *      name: travel-requests
 *      summary: "view travel requests"
 *      description: "paginated list of travel requests of your direct reports."
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: page
 *         in: path
 *         type: integer
 *         default: 1
 *       - name: itemsPerPage
 *         in: path
 *         type: integer
 *         default: 20
 *      responses:
 *       "200":
 *         description: "You have successfully fetched the trips"
 *       "403":
 *         description: "No trip added yet or page not found."
 */

// cancel travel request

/**
 * @swagger
 * /api/v1/trips/cancel-travel-request/{id}/:
 *  patch:
 *      tags:
 *       - Trips
 *      name: cancel-travel-request
 *      summary: "cancel travel requests"
 *      description: "cancel travel request which has not been accepted or canceled."
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *      responses:
 *       "200":
 *         description: "You have successfully canceled the trip"
 *       "401":
 *         description: "Trip was already canceled."
 */



 // cancel travel request

 /**
  * @swagger
  * /api/v1/trips/update-travel-request/{id}/:
  *  patch:
  *      tags:
  *       - Trips
  *      name: update-travel-request
  *      summary: "update travel request"
  *      description: "Edit travel request which has not been accepted or canceled."
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: Authorization
  *         in: header
  *         required: true
  *       - name: permission_name
  *         in: header
  *         required: true
  *       - name: id
  *         in: path
  *         type: integer
  *         required: true
  *       - name: body
  *         in: body
  *         schema:
  *             type: object
  *             properties:
  *                name:
  *                  type: string
  *                orgin:
  *                  type: string
  *      responses:
  *       "200":
  *         description: "You have successfully updated the trip"
  *       "401":
  *         description: "Trip was already updated."
  */
