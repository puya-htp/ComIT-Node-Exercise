const isEven = require("./number");

const marks = [2, 3, 101, 201, 202, 100];

for (mark of marks) {
  let type = "odd";

  if (isEven(mark)) {
    type = "even";
  }

  console.log(mark + " is " + type);
}
