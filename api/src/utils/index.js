const passwordValidator = require("password-validator");
const AWS = require("aws-sdk");

function validatePassword(password) {
  const schema = new passwordValidator();
  schema
    .is()
    .min(6) // Minimum length 6
    .is()
    .max(100); // Maximum length 100
  return schema.validate(password);
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = {
  validatePassword,
  validateEmail,
};
