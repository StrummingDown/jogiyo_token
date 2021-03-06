// import axios from "axios";
import User from "../models/User";
export const userInfo = async (req, res) => {
  const { nickname, birth, gender, mbti, location, contents } = req.body;
  console.log(res.locals);

  const {
    user: { email },
  } = res.locals;
  if (!nickname || !birth || !gender || !mbti || !location || !contents) {
    res.status(400).json({ message: "정보를 모두 입력해주세요." });
  } else {
    const updateUerInfo = await User.findOneAndUpdate(
      { email },
      { nickname, birth, gender, mbti, location, contents },
      { multi: true, new: true }
    );
    console.log(updateUerInfo);
    if (!updateUerInfo) {
      res.status(400).json({ message: "회원 정보 수정 오류" });
    } else {
      res.status(200).json({ message: "정보 업데이트 성공", updateUerInfo });
    }
  }
};
