import express, { Request, Response } from "express";
const app = express();
const port = 3000;

//parsers

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
