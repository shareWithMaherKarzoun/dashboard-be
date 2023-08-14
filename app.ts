import express from "express";
import cors from 'cors'
import LoginController from "./routers/login";

const app = express();
const router = express.Router();

app.use(cors());

router.use((req, res, next) => {
  console.log("Method: " + req.method);
  console.log("URL: " + req.url);
  next();
});

router.use(LoginController);


app.use(router)
export default app;
