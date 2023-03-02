function getDaysInYear(year) {
  return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 366 : 365;
}
console.log(getDaysInYear(1764));
getDaysInYear();

function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
getDayNumber("2023-01-12"); 
getDayNumber("2023-02-26");
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));

const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const quarters=["I", "II", "III", "IV"]
const getQuarters = (date) => {
  const dateObj = new Date(date);
  const month = monthsArr[dateObj.getMonth()];
  const day = dateObj.getDate();
  const quarter = quarters[Math.floor(dateObj.getMonth() / 3)];

  return `${month} ${day} is ${quarter} quarter`;
};



const createMap = (arr = []) => {
  const map = new Map();

  arr.forEach((obj) => {
    map.set(obj.id, obj);
  });

  return map;
};
createMap([
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
]);


const cache = new Map();
const cacheCalcDateDiff = (startDate, endDate) => {
  const key = `${startDate}-${endDate}`;
  if (cache.has(key)) {
    cache.get(key);
  } else {
    cache.set(key, calcDateDiff(startDate, endDate));
  }
};