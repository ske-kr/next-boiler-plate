import { useState } from "react";
import LoginModal from "../components/LoginModal";
import ModalBase from "../components/ModalBase";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const onClickCodeListOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  return (
    <div>
      <div>홈페이지</div>
      <button onClick={() => setIsActive(true)}>테스트 버튼</button>
      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        <LoginModal closeEvent={onClickModalOff} title="세부 항목">
          <div className="overflow-y-scroll max-h-80">
            요기에 로그인뭐시기 들어갈 예정
          </div>
        </LoginModal>
      </ModalBase>
    </div>
  );
}
