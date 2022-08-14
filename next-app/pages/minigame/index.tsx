import React from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import JDH from "../../images/JDH.jpeg";
import KHM from "../../images/KHM.jpeg";
import LCK from "../../images/LCK.jpeg";
import LGJ from "../../images/LGJ.jpeg";
import PYJ from "../../images/PYJ.png";
import SKE from "../../images/SKE.jpeg";
import SYT from "../../images/SYT.jpeg";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const bangaItems = [
  { id: 0, option: "정대훈", imageUrl: JDH },
  { id: 1, option: "강현명", imageUrl: KHM },
  { id: 2, option: "임채강", imageUrl: LCK },
  { id: 3, option: "이근진", imageUrl: LGJ },
  { id: 4, option: "박준영", imageUrl: PYJ },
  { id: 5, option: "손광은", imageUrl: SKE },
  { id: 6, option: "서영태", imageUrl: SYT },
];

export default function Minigame() {
  const [items, setItems] = React.useState(bangaItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const [excluded, setExcluded] = React.useState([]);
  const [start, setStart] = React.useState(false);
  const [toggleResult, setToggleResult] = React.useState(false);
  const [winPrizeIndex, setWinPrizeIndex] = React.useState(
    Math.floor(Math.random() * 7)
  );
  const [winner, setWinner] = React.useState(null);

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];
  const prizes = items.map((item) => {
    console.log(item.imageUrl);
    return { image: item.imageUrl.src };
  });

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).substring(2);

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
  }));

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    const win = items.filter((item) => {
      if (item.id === winPrizeIndex) {
        return true;
      }
    });
    alert(win[0].option + "당첨~");
    location.reload();
  };

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "40px",
      }}
    >
      <ScrollMenu>
        {items.map(({ id, imageUrl, option }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
            imageUrl={imageUrl}
            name={option}
          />
        ))}
      </ScrollMenu>
      <div style={{ height: "40px" }}></div>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart}>Start</button>
      <div style={{ height: "40px" }}></div>
      <div>
        여기는 사진올리는 게시판같은거 넣으면 좋을듯 사진보관함마냥 년도별로
      </div>
      {toggleResult && (
        <div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "40px",
            textAlign: "center",
          }}
        >
          {winner}당첨~
        </div>
      )}
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Card({ onClick, selected, title, itemId, imageUrl, name }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <Image src={imageUrl} width={"80px"} height={"80px"} />
        <div>{name}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "20px",
        }}
      />
    </div>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: String;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"arrow" + `-${className}`}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}
