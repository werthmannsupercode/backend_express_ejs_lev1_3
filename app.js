const express = require('express');
const app = express();
const { navArray } = require('./nav');
const PORT = 9000;
app.set('view engine', 'ejs');

app.use(express.static("public"))

app.use((req, _, next) => {
    console.log("new request", req.method, req.url)
    next();
})

app.get("/", (_, res) => {
    res.render("pages/index.ejs", { nav: navArray });
})

app.get("/about", (_, res) => {
    res.render("pages/about.ejs", { nav: navArray });
})

app.get("/works", (_, res) => {
    res.render("pages/works.ejs", { nav: navArray });
})

app.get("/gallery", (_, res) => {
    res.render("pages/gallery.ejs", { nav: navArray });
})


app.use((_, res) => {
    res.sendFile(__dirname + "/public/error.html")
})

app.listen(PORT, () => { console.log('listening on port', PORT) })