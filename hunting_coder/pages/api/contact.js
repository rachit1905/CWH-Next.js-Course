import * as fs from "fs";

export default function handler(req, res) {
  if (
    req.method === "POST" &&
    req.rawHeaders.includes("http://localhost:3000/contact") //ensures requests are processed only when they come from the contact page
  ) {
    // console.log(req.body.name);
    let data = JSON.stringify(req.body);
    let fileno = fs.readdirSync("contacts");
    fileno = fileno.length + 1;
    fs.appendFileSync(`contacts/${fileno}.json`, data);
    res.status(200).json();
    // console.log(req.rawHeaders);
    // res.status(200).json({"status":"Doneeeeeeeeeee"});
  } else res.status(500).json();
}
