import express = require("express")
import {Application, Request, Response} from "express";
import {LoginRequest} from "./types/LoginRequest";
import {User} from "./types/User";

const app: Application = express();


app.get("/", (req: Request, res: Response) => {
    let user: User =  {
        id: 1,
        password: "1234",
        username: "user"

    }
        res.send(user)
})

app.get("/login", (req:Request, res: Response) => {
    const loginRequest: LoginRequest = req.query;
    if(!loginRequest.username || !loginRequest.password){
        res.send({
            status:400,
            message: "Username or Password have not been provided"
        })
    }
    res.send({
        status:200,
        message:"Login successful"
    })
    console.log(loginRequest)
})

app.listen(8081, () => {
    console.log("Connected")
})

import {promises} from "fs";
(async() => {
    const data = await promises.readFile()
})
