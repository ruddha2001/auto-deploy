import { Request, Response, Router } from "express";
const router = Router();

export const payloadHandler = (): Router => {
  router.get("/:name", processHandler);

  return router;
};

const processHandler = (req: Request, res: Response) => {
  res.json({ name: req.params.name });
};
