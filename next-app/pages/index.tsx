import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Image from "next/image";
import ModalBase from "../components/ModalBase";
import LoginModal from "../components/LoginModal";
import loginIcons from "../images/loginIcons.jpg";
import Button from "react-bootstrap/Button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { data, status } = useSession();
  const onClickCodeListOn = () => {
    setIsActive(true);
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log("logined");
    }
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  return (
    <div>
      <div>홈페이지</div>
      {data?.user && (
        <div>
          <div>{data?.user?.name}</div>
          <div>{data?.user?.email}</div>
        </div>
      )}
      <button onClick={() => setIsActive(true)}>테스트 버튼</button>
      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        <LoginModal closeEvent={onClickModalOff} title="Welcome Back">
          <div>
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
  );
}
