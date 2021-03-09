/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * paths:
 *   /api/v1/rating/rate:
 *    post:
 *        tags:
 *         - Accomodation Rating
 *        summary: "User should be able to rate an accommodation"
 *        description: "Pass the accomodationId, the token and the rating"
 *        consumes:
 *         - application/json
 *        security:
 *          - Bearer: []
 *        parameters:
 *         - name: Authorization
 *           in: header
 *         - name: permission_name
 *           in: header
 *         - name: body
 *           in: body
 *           schema:
 *               type: object
 *               properties:
 *                  "accomodationId":
 *                   type: integer
 *                   required: true
 *                  "rating":
 *                   type: integer
 *                   required: true
 *        responses:
 *         "200":
 *           description: "Rating Successfully added"
 *         "404":
 *           description: "Accomodation does not exist"
 *
 */
/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * paths:
 *   /api/v1/review/review:
 *    post:
 *        tags:
 *         - Accomodation Rating
 *        summary: "User should be able to rate an accommodation"
 *        description: "Pass the accomodationId, the token and the rating"
 *        consumes:
 *         - application/json
 *        security:
 *          - Bearer: []
 *        parameters:
 *         - name: Authorization
 *           in: header
 *         - name: permission_name
 *           in: header
 *         - name: body
 *           in: body
 *           schema:
 *               type: object
 *               properties:
 *                  "accomodationId":
 *                   type: integer
 *                   required: true
 *                  "review":
 *                   type: string
 *                   required: true
 *        responses:
 *         "200":
 *           description: "Review Successfully added"
 *         "404":
 *           description: "Accomodation does not exist"
 *
 */

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * paths:
 *   /api/v1/review/allreviews:
 *    get:
 *        tags:
 *         - Accomodation Rating
 *        summary: "User should be able to get all accommodations"
 *        description: "Pass the token after signin"
 *        security:
 *          - Bearer: []
 *        parameters:
 *         - name: Authorization
 *           in: header
 *        responses:
 *         "200":
 *           description: "All reviews succesfully queried"
 *         "404":
 *           description: "Accomodation does not exist"
 *
 */

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * paths:
 *   /api/v1/rating/accomodationratings:
 *    get:
 *        tags:
 *         - Accomodation Rating
 *        summary: "User should be able to get all ratings of an accommodation"
 *        description: "Pass the token after signin"
 *        security:
 *          - Bearer: []
 *        parameters:
 *         - name: Authorization
 *           in: header
 *        responses:
 *         "200":
 *           description: "All ratings succesfully queried"
 *         "404":
 *           description: "Accomodation does not exist"
 *
 */
