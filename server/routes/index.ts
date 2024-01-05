import express from "express";
import problem from "./problem";
import accounts from "./accounts";

const router = express.Router();

router.use("/problem", problem);
router.use("/accounts", accounts);
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is up",
    });
})

export default router;
