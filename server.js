import express from "express";
import { dirname } from "path";
import { join } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Allows import of files from "public" folder
app.use(express.static(join(__dirname, 'public')));

//Initialize Home Page
app.get("/", (req, res) => {
    res.render("index.ejs")
})
//Initialize Contact Page
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})
//Initialize Projects Page
app.get("/projects", (req, res) => {
    res.render("projects.ejs")
})
//Initialize Self-Eval Page
app.get("/self-eval", (req, res) => {
    res.render("self-eval.ejs")
})
//Initialize Calendar Page
app.get("/calendar", (req, res) => {
    res.render("calendar.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});