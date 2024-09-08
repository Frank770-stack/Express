// const express = require("express");
// const app = express();
// const port = 4000;
// app.get("*", function (req, res) {
//   res.end("Hello World");
// });

// app.listen(port, function () {
//   console.log(
//     "The server is running, " +
//       "please open your browser at http://localhost:%s",
//     port
//   );
// });
// const express = require("express");
// const app = express();
// const myLogger = function (req, res, next) {
//   console.log("A new request received at " + Date.now());
//   next();
// };
// app.use(myLogger);
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.listen(3000);
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/first_template", function (req, res) {
  res.render("first_view");
});
