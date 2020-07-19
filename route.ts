import { Request, Response, Router } from "express";
const router = Router();

export const payloadHandler = (): Router => {
  router.post("/:name", processHandler);

  return router;
};

const processHandler = (req: Request, res: Response) => {
  console.log(req.body.payload);
  console.log(req.params.name);
  res.sendStatus(200);
};
