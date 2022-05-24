import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

export const validateMiddleware =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;

    try {
      await schema.validate(resource, { abortEarly: false });
      return next();
    } catch (e: any) {
      return res.status(400).json({ message: e.errors });
    }
  };
