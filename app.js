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
app.use("/categories", require("./routes/categories.route"));

app.use("/user", require("./routes/user.route"));


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

// http.listen(process.env.PORT || 3000, function(){
//   console.log('listening on', http.address().port);
// });
