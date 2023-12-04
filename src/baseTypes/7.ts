/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  monday,
  thuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}

function isWeekend(day: Day): boolean {
  switch (day) {
    case Day.monday:
      return false;
    case Day.thuesday:
      return false;
    case Day.wednesday:
      return false;
    case Day.thursday:
      return false;
    case Day.friday:
      return false;
    case Day.saturday:
      return true;
    case Day.sunday:
      return true;
  }
}
