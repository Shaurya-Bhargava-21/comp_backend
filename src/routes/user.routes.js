import {Router} from "express";
import {loginUser, logoutUser, refreshAccessToken, registerUser} from '../controllers/user.controller.js'
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router =  Router();

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    },
    {
        name:"coverImage",
        maxCount:1
    }

]),registerUser)

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

//  Multer stores uploaded files in req.files, which is an object like this-

// req.files = {
//   avatar: [
//     {
//       fieldname: 'avatar',
//       originalname: 'profile.png',
//       encoding: '7bit',
//       mimetype: 'image/png',
//       destination: 'public/temp',
//       filename: 'avatar-1704281738291.png',
//       path: 'public/temp/avatar-1704281738291.png',
//       size: 10245
//     }
//   ],
//   coverImage: [
//     { ... }  // another file object
//   ]
// }


export default router;