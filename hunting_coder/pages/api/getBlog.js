// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
  // console.log(req);
  let blog = fs.readFileSync("blogdata/" + req.query.blog, 'utf-8');
  res.status(200).json(JSON.parse(blog));
}
