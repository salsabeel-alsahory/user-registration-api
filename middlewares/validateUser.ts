import { Request, Response, NextFunction } from 'express';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Call next() if validation passes
  next();
};
