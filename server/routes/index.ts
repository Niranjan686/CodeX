import express from "express";
import problem from "./problem";
import accounts from "./accounts";

const router = express.Router();

router.use("/problem", problem);
router.use("/accounts", accounts);
router.get("/", (req, res) => {console.log("demo")})

export default router;
