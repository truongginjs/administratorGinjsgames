var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main.hbs",
    layoutsDir: "views/_layouts"
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/products", require("./routes/products.route"));

app.use((req, res, next) => {
  res.render("404", { layout: false });
});

app.use((error, req, res, next) => {
  res.render("error", {
    layout: false,
    message: error.Message,
    error
  });
});

app.listen(3000, () => {
  console.log(
    "chạy ngay đi trước khi mọi điều tồi tệ hơn http://localhost:3000"
  );
});
