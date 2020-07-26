let days = 10;
const job = true;
let message;

if (days > 0 && job === true) {
  message = `ты не нашел работу - продолжай работать`;
  console.log(`Осталось ${days} дней ${message}`);
} else if (days <= 0 && job === true) {
  message = `время вышло ты не нашел работу - иди работай и ищи новую работу`;
  console.log(message);
} else {
  message = "но, ты уже нашел работу поздравляю";
  console.log(`Осталось ${days} дней ${message}`);
}

// if (days <= 0 && job === !true) {
//   message = `ты нашел работу - ты увольняешься`;
// } else if (days <= 0 && job === true) {
//   message = `ты не нашел работу - иди работай и ищи новую работу`;
// } else {
//   message = `поздравляю, ты уже нашел работу увольняйся`;
// }

// console.log(`Осталось ${days} дней, ${message}`);
