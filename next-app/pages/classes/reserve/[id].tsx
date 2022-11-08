import { Button, FormControl, Select } from "@chakra-ui/react";
import { getDay } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { getClassAvailability } from "../../../src/services/classes.api";
import { createReservation } from "../../../src/services/reservations.api";
import { isValidDate } from "../../../src/utils/date.validation";
import styles from "../../../styles/Home.module.css";

function ReserveClass({ classAvailability, classId }) {
  const currDate = new Date(Date.now());
  const [reservedDate, setReserveDate] = useState(currDate);
  const [classTimes, setClassTimes] = useState(classAvailability);
  const [inputTime, setInputTime] = useState(classAvailability[0]);

  const getClassAvailableTimes = async (date) => {
    const reservationDate = new Date(date);
    setReserveDate(reservationDate);
    const reservationWeekday = getDay(reservationDate); //get weekday(Sun ~ Sat) of date
    const newClassTimes = await getClassAvailability(
      classId,
      reservationWeekday
    );
    setClassTimes(newClassTimes);
  };

  const handleSubmit = (date, time) => {
    if (!isValidDate(reservedDate, time)) {
      throw new Error("날짜가 이미 지났습니다!");
    }

    createReservation({ reservation_date: date, class_time: time }, 1);
  };

  return (
    <>
      <main className={styles.container}>
        <FormControl onSubmit={() => handleSubmit(reservedDate, inputTime)}>
          <DatePicker
            selected={reservedDate}
            onChange={(date) => getClassAvailableTimes(date)}
          />
          <Select
            placeholder="시간 선택"
            onSelect={() => inputTime}
            onChange={(time) => setClassTimes(time)}
          >
            {classTimes.map((classTime) => {
              return <option>{classTime.time}</option>;
            })}
          </Select>
          <Button type="submit">예약하기</Button>
        </FormControl>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const currDate = new Date(Date.now());

  const classId = context.params.id;
  // const currWeekday = getDay(currDate);
  const currWeekday = 1;
  const classAvailability = await getClassAvailability(classId, currWeekday);

  return {
    props: { classAvailability, classId },
  };
}

export default ReserveClass;
