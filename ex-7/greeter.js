const greet = (
  first_name,
  last_name,
  callback = function (message) {
    return message;
  }
) => {
  const message = "Hi " + first_name + " " + last_name;

  return callback(message);
};

const standardOutput = (message) => {
  console.log(message);

  return message;
};

const logger = (message) => {
  console.log(message);

  return message;
};

greet("Some", "Guy", standardOutput);
greet("Some", "Guy", logger);
greet("Some", "Guy");
