import express, { Request, Response } from "express"
const router = express.Router()

router.post("/", async (req: Request, res: Response) => {
    try {
        console.log("Create Employee !")
        res.status(200).json({ data: "Employee created successfully !" })
    }
    catch (error) {
        throw error
    }
})
module.exports = router