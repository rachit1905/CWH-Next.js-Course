import * as fs from "fs";

export default function handler(req, res) {
  let filenames = fs.readdirSync("blogdata", "utf-8");
  filenames = filenames.slice(0, req.query.count);
  let allBlogs = [];
  for (let i = 0; i < filenames.length; i++) {
    let blog = fs.readFileSync(`./blogdata/${filenames[i]}`, "utf-8");
    allBlogs.push(JSON.parse(blog));
  }
  //   console.log(allBlogs);
  res.status(200).json(JSON.stringify(allBlogs));
}
