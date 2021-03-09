/**
 * @swagger
 * /api/v1/booking/book:
 *  post:
 *      tags:
 *       - Accomodation Booking
 *      summary: "User should be able to book an accomodation and stay safe that he has got an accomodation"
 *      description: "Pass the accomodationId, the token, the checkin date and the checkout date"
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
 *       "200":
 *         description: "Accomodation booked"
 *       "404":
 *         description: "Accomodation does not exist"
 *
 */
/**
 * @swagger
 * /api/v1/booking/availableAccomodations:
 *  get:
 *      tags:
 *       - Accomodation Booking
 *      summary: "Queries all available accomodations for a user"
 *      description: "Login and check all available accomodations according to the booked ones and the available ones "
 *      parameters:
 *       - name: token
 *         in: header
 *      responses:
 *       "200":
 *         description: "All your available accomodations"
 *       "500":
 *         description: "Unknown error"
 *
 */
/**
 * @swagger
 * /api/v1/booking/bookedAccomodations:
 *  get:
 *      tags:
 *       - Accomodation Booking
 *      summary: "Get all your booked accomodations"
 *      description: "Login and trigger the route to get all booked accomodations"
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
