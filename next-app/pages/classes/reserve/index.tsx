// TODO:
// 1. 유저 날짜 선택
// 2. DB에서 가능한 시간 검색 (filter: class, weekday)

export default async function MakeReservation({ classAvailability }) {
  // const currDate = new Date(Date.now());
  // const [reserveDate, setReserveDate] = useState(currDate);
  // const [classTimes, setClassTimes] = useState(classAvailability);
  // console.log(classTimes);
  // const getAvailableTimes = async (date) => {
  //   const reservationDate = new Date(date);
  //   setReserveDate(reservationDate);
  //   const reservationWeekday = getDay(reservationDate); //get weekday(Sun ~ Sat) of date
  //   const newClassTimes = await getClassAvailability(8, reservationWeekday);
  //   setClassTimes(newClassTimes);
  // };
  // return (
  //   <main className={styles.container}>
  //     hihi
  //     <FormControl>
  //       <DatePicker
  //         selected={reserveDate}
  //         onChange={(date) => getAvailableTimes(date)}
  //       />
  //       <Stack placeholder="시간 선택">
  //         {classTimes.map((classTime) => {
  //           return <Select>{classTime.time}</Select>;
  //         })}
  //       </Stack>
  //     </FormControl>
  //   </main>
  // );
}

export async function getServerSideProps(context: any) {
  // const currDate = new Date(Date.now());
  // // const classId = context.params.id;
  // const classId = 8;
  // const currWeekday = getDay(currDate);
  // const classAvailability = await getClassAvailability(classId, currWeekday);
  // return {
  //   props: { classAvailability },
  // };
}
