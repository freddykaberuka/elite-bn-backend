/* eslint-disable */
import jwt from 'jsonwebtoken';

export const decodeToken = async (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);