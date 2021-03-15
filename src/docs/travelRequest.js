/**
 * @swagger
 * /api/v1/trip/save:
 *   post:
 *     tags:
 *       - Trips
 *     name: save trip
 *     summary: create trip request
 *     consumes:
 *        - multipart/form-data
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - in: formData
 *         name: orgin
 *         type: string
 *         required: true
 *       - in: formData
 *         name: destination
 *         type: Array
 *       - in: formData
 *         name: reason
 *         type: string
 *         required: true
 *       - in: formData
 *         name: type
 *         type: string
 *         required: true
 *       - in: formData
 *         name: returnDate
 *         type: date
 *       - in: formData
 *         name: accomodationId
 *         type: integer
 *         required: true
 *       - in: formData
 *         name: lineManager
 *         type: integer
 *         required: true
 *     responses:
 *       201:
 *             description: Trip request created.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unAuthorized
 * */
