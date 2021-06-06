const express = require('express');
const router = require('./router/router');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

//path setting
const staticpath = path.join(__dirname, "../public");
const temppath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", temppath);
hbs.registerPartials(partialspath);

//middleware
app.use("/bs_css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css/")));
app.use("/bs_js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js/")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist/")));            //not used

//routing
app.use(router);

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})