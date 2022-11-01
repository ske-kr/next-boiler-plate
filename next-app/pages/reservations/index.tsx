import { FormControl, Select } from "@chakra-ui/react";
import { getDay } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { getClassAvailability } from "../../src/services/database.read.api";

// TODO:
// 1. 유저 날짜 선택
// 2. DB에서 가능한 시간 검색 (filter: class, weekday)

export default function MakeReservation({ classAvailability }) {
  const currDate = new Date(Date.now());
  let [classTimes, setClassTimes] = useState(classAvailability);
  let [reserveDate, setReserveDate] = useState(currDate);

  const getAvailableTimes = async (date) => {
    const reservationDate = new Date(date);
    setReserveDate(reservationDate);

    const reservationWeekday = getDay(reservationDate); //get weekday(Sun ~ Sat) of date
    let newClassTimes = await getClassAvailability(8, reservationWeekday);
    setClassTimes(newClassTimes);
  };

  const showClassTimeList = () => {
    return classTimes.map((exerciseClass) => {
      return <option>{`${exerciseClass.time}`}</option>;
    });
  };

  return (
    <>
      <FormControl>
        <DatePicker
          selected={reserveDate}
          onChange={(date) => getAvailableTimes(date)}
          validate={showClassTimeList}
        />

        <Select placeholder="Select option">{showClassTimeList()}</Select>
      </FormControl>
    </>
  );
}

export async function getServerSideProps() {
  const currDate = new Date(Date.now());
  const currWeekday = getDay(currDate);
  const classId = 8;
  const classAvailability = await getClassAvailability(classId, currWeekday);

  return {
    props: { classAvailability },
  };
}
