const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./authRouter.js");

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://user:user@cluster0.vg1vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        app.listen(5000, () => console.log("Server is working on post 5000 "));
    } catch (e) {
        console.error(e);
    }
};
start();
