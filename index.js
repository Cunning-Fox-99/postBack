import express from 'express'
import mongoose from "mongoose";

import {registerValidation, loginValidation, postCreateValidation} from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import  * as UserController from "./controlers/UserController.js"
import  * as PostController from "./controlers/PostController.js"

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.lavkksn.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log('DB Error: ', err))

const app = express()
app.use(express.json())


app.post('/login', loginValidation, UserController.login)
app.post('/register',registerValidation, UserController.register)
app.get('/me', checkAuth, UserController.getMe)

app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch('/posts/:id', checkAuth, PostController.update)



app.listen('4444', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})