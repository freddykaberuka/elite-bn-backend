/**
 * @swagger
 * /api/v1/booking/book:
 *  post:
 *      tags:
 *       - Accomodation Booking
 *      summary: "Creates an account for barefoot nomad"
 *      description: "Needed is youe first and last name, your email and password"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: token
 *         in: header
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "checkinDate":
 *                 type: date-time
 *                 required: true
 *                "checkoutDate":
 *                 type: date-time
 *                 required: true
 *                "AccomodationId":
 *                 type: integer
 *                 required: true
 *                "UserId":
 *                 type: interger
 *                 required: true
 *      responses:
 *       "201":
 *         description: "Account created"
 *       "200":
 *         description: Success
 *       "403":
 *         description: "Account creation failed"
 *
 */
/**
 * @swagger
 * /api/v1/booking/availableAccomodations:
 *  get:
 *      tags:
 *       - Accomodation Booking
 *      summary: "Creates an account for barefoot nomad"
 *      description: "Needed is youe first and last name, your email and password"
 *      parameters:
 *       - name: token
 *         in: header
 *      responses:
 *       "201":
 *         description: "Account created"
 *       "200":
 *         description: Success
 *       "403":
 *         description: "Account creation failed"
 *
 */
/**
 * @swagger
 * /api/v1/booking/bookedAccomodations:
 *  get:
 *      tags:
 *       - Accomodation Booking
 *      summary: "Creates an account for barefoot nomad"
 *      description: "Needed is youe first and last name, your email and password"
 *      parameters:
 *       - name: token
 *         in: header
 *      responses:
 *       "201":
 *         description: "Account created"
 *       "200":
 *         description: Success
 *       "403":
 *         description: "Account creation failed"
 *
 */