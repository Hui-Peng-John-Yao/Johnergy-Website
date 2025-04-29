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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});