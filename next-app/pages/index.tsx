import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Image from "next/image";
import ModalBase from "../components/ModalBase";
import LoginModal from "../components/LoginModal";
import loginIcons from "../images/loginIcons.jpg";
import Button from "react-bootstrap/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { AppBarBase } from "../components";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { data, status } = useSession();
  const onClickCodeListOn = () => {
    setIsActive(true);
  };
  // let { user, error } = await supabase.auth.signInWithPassword({
  //     email: 'someone@email.com',
  //     password: 'FXtzKmvVafckLioAIMcr'
  // })

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log("logined");
    }
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  return (
    <>
      <AppBarBase />
      <>
        <div style={{marginTop: 200}}>
          <div>홈페이지</div>
          <div>{data?.user?.name}</div>
          <div>{data?.user?.email}</div>
          <button onClick={() => setIsActive(true)}>테스트 버튼</button>
          <ModalBase active={isActive} closeEvent={onClickModalOff}>
            <LoginModal closeEvent={onClickModalOff} title="Welcome Back">
              <div>
                <button
                  style={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "120px",
                    maxWidth: "100%",
                    margin: 0,
                    width: "100%",
                    paddingTop: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingBottom: "10px",
                    verticalAlign: "middle",
                    textAlign: "center",
                    cursor: "pointer",
                    overflow: "visible",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1",
                    color: "#000",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#d6d6d6",
                    borderRadius: "3px",
                  }}
                >
                  Sign in with Apple
                </button>
                <button
                  style={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "120px",
                    maxWidth: "100%",
                    marginTop: "1rem",
                    width: "100%",
                    paddingTop: "12px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingBottom: "10px",
                    verticalAlign: "middle",
                    textAlign: "center",
                    cursor: "pointer",
                    overflow: "visible",
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1",
                    color: "#000",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#d6d6d6",
                    borderRadius: "3px",
                  }}
                >
                  Sign in with Facebook
                </button>
                로그인아이콘
                <Image src={loginIcons} />
                <div
                  style={{
                    marginTop: "2px",
                  }}
                >
                  <input
                    placeholder="이메일 형식의 아이디를 입력해 주세요."
                    style={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "120px",
                      maxWidth: "100%",
                      marginTop: "2px",
                      marginBottom: "2px",
                      width: "100%",
                      paddingTop: "12px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      paddingBottom: "10px",
                      verticalAlign: "middle",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "500",
                      lineHeight: "1",
                      borderWidth: "1px",
                      borderRadius: "4px",
                    }}
                    value={email || ""}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    placeholder="비밀번호를 입력해주세요."
                    style={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "120px",
                      maxWidth: "100%",
                      marginTop: "2px",
                      marginBottom: "2px",
                      width: "100%",
                      paddingTop: "12px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      paddingBottom: "10px",
                      verticalAlign: "middle",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "500",
                      lineHeight: "1",
                      borderWidth: "1px",
                      borderRadius: "4px",
                    }}
                    type="password"
                    value={password || ""}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onKeyPress={onKeyPress}
                  />
                </div>
                <Button onClick={() => signIn("Google")} variant="primary">
                  Google Log in
                </Button>
                <Button onClick={() => signIn("Kakao")} variant="primary">
                  Kakao Log in
                </Button>
                <Button
                  onClick={() => signIn("CredentialsProvider")}
                  variant="primary"
                >
                  Email Log in
                </Button>
                <Button onClick={() => signOut()} variant="primary">
                  Sign Out
                </Button>
              </div>
            </LoginModal>
          </ModalBase>
        </div>
      </>
    </>
  );
}
