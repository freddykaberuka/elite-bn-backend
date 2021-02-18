/**
 * @swagger
 * /api/v1/notifications/:
 *   get:
 *     tags:
 *       - Notifications
 *     name: Notifications
 *     summary: Get notifications
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: Get notifications.
 *       401:
 *             description: unauthorized
 * */
/**
 * @swagger
 * /api/v1/notifications/findById/{id}:
 *   get:
 *     tags:
 *       - Notifications
 *     name: find Notification by id
 *     summary: fetch Notification by id
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: permission_name
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Get notification by id.
 *       401:
 *             description: unauthorized
 * */