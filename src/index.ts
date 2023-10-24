
import express, { Request, Response } from "express"
import AuthHandler from "./handlers/AuthHandler";

const app = express()

app.use((req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace * with the specific origin(s) you want to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json())
app.use("/create-employee", AuthHandler, require("./api/create-employee"))







app.listen(5000, () => {
    console.log("Server is listening on port 5000 !")
})