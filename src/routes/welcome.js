import { Router } from 'express';

const router = Router();
/**
 * @swagger
 * /:
 *  get:
 *    tags:
 *      - Welcome
 *    summary: Welcome to this api
 *    responses:
 *      '200':
 *        description: success
 */

router.get('/', (req, res) => {
  res.status(200).send({ status: 200, message: 'welcome' });
});
export default router;
