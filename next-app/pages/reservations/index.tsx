import TextField from "@mui/material/TextField";
import { getDay } from "date-fns";
import { getClassAvailability } from "../../src/services/database";
import { Weekday } from "../../src/utils/weekday.enum";

// TODO:
// 1. 유저 날짜 선택
// 2. DB에서 가능한 시간 검색 (filter: class, weekday)

export default function MakeReservation({ classAvailability }) {
  console.log("class times: ", classAvailability);

  const logIt = async (event) => {
    event.preventDefault();

    const date = event.target.date.value;
    alert(`date: ${date}`);
    const weekday = getDay(new Date(date));
    alert(`weekday: ${weekday === Weekday.Wed}`);
  };

  return (
    <>
      <h1>hello</h1>
      <form onSubmit={logIt}>
        <input type="text" id="inpu" />
        <TextField
          id="date"
          label="수업 예약"
          type="date"
          defaultValue="2022-10-01"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <Button type="submit">Text</Button> */}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export async function getStaticProps() {
  const classAvailability = await getClassAvailability(1, Weekday.Wed);
  return {
    props: { classAvailability },
  };
}
