import express from "express";
import {
    options
} from "./config/config.js";
import {
    __dirname
} from "./util.js";
import {
    apiRouter
} from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//routes
app.use(apiRouter);

const PORT = options.server.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));