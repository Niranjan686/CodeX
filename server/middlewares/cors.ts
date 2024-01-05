import express, { Request, Response, NextFunction } from "express";

export function customCors(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, OPTIONS, DELETE"
    );

    if (req.method === "OPTIONS") {
        return res.status(200).json({
            body: "OK",
        });
    }

    next();
}

const app = express();

// Apply customCors middleware globally
app.use(customCors);

// Your routes and other middleware go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
