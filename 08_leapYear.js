let Year = function ckeckLeapYear(leapYear) {
  if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
    console.log(leapYear + " is a leap year");
  } else {
    console.log(leapYear + " is not a leap year");
  }
};
Year(2020);
Year(1999);
Year(1600);
Year(2022);
Year(1945);
Year(null);
Year("Twenty Twenty");
Year(undefined);
Year(NaN);
Year(1745);
