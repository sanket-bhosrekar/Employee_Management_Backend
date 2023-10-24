import serviceAuth from "../api/service-auth"
import { Request, Response } from "express"
export default (req: Request, res: Response, next: any) => {
    try {
        const requestedPath = serviceAuth.find((ele) => ele.path === req?.originalUrl)
        if (requestedPath) {
            if (requestedPath?.authRequired) { }
            else {
                next()
            }
        }
        else {
            res.status(404).json({
                Error: "Path not found !"
            })
        }
    }
    catch (error) {
        res.status(400).json({ error: "Request Failed" })
    }
}