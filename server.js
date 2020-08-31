const express = require("express");
const app = express();

var images = ["https://cdn.glitch.com/049fe729-9d72-4be1-9917-dd6db115e8ea%2FScreenshot%202020-08-24%20at%2011.11.40.png?v=1598873118142", "https://cdn.glitch.com/049fe729-9d72-4be1-9917-dd6db115e8ea%2FScreenshot%202020-08-24%20at%2011.16.46.png?v=1598873149276", "https://cdn.glitch.com/049fe729-9d72-4be1-9917-dd6db115e8ea%2FScreenshot%202020-08-24%20at%2010.55.20.png?v=1598873177616", "https://cdn.glitch.com/049fe729-9d72-4be1-9917-dd6db115e8ea%2FScreenshot%202020-08-24%20at%2011.28.15.png?v=1598873194183", "https://cdn.glitch.com/049fe729-9d72-4be1-9917-dd6db115e8ea%2Fthelliboi%20klar.png?v=1598873241453"]

app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/api", (request, response) => {
  response.sendFile(__dirname + "/api.html");
});
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
