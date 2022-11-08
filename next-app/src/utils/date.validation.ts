export function isValidDate(reservedDate: Date, time) {
  // date cannot be in the past
  const currDate = new Date(Date.now());

  if (reservedDate < currDate) {
    throw new Error("날짜가 이미 지났습니다");
  }

  // current time is not after reserved time + date
  return true;
}

export function isWithinClassLimit() {}
