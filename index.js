const http = require("http");

function hitEndpoint() {
  http
    .get("https://twitter-bot-eosin.vercel.app/", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(data);
        setTimeout(hitEndpoint, 600000); // 10 minutes in milliseconds
      });
    })
    .on("error", (err) => {
      console.error(err);
    });
}

hitEndpoint();
