import express from "express";
import { githubLogin } from "../controllers/oAuth/githubController";
import { googleLogin } from "../controllers/oAuth/googleController";
import { kakaoLogin } from "../controllers/oAuth/kakaoController";
import { userInfo } from "../controllers/userInfoController";
import { verify } from "../JWT/verify";

const oAuthRotuer = express.Router();

oAuthRotuer.post("/kakao", kakaoLogin);

oAuthRotuer.post("/google", googleLogin);

oAuthRotuer.post("/github", githubLogin);

oAuthRotuer.post("/userInfo", verify, userInfo);
export default oAuthRotuer;
