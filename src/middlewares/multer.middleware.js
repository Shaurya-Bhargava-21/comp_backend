import multer from "multer";

import path from "path";
import fs from "fs";

const tempDir = path.join(process.cwd(), "public/temp"); // absolute path

// create folder if missing
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, tempDir),
    filename: (req, file, cb) => cb(null, file.originalname)
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../../public/temp')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)// we are putting the og name because this file will be present in local  for a very small amount of time so there wont be as such any case of name overlapping of file 
//   }
// })

export const upload = multer({ storage: storage })