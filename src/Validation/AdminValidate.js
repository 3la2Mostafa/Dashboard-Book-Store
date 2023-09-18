const AdminValidate = (values) => {
  const errors = {};

  let checkEmail = /^[a-z0-9._%+-]+@[admin]+\.[a-z]{2,4}$/;
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!checkEmail.test(values.email)) {
    errors.email = "Invalid email address";
  }

  let checkPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*\W)/;
  if (!values.password) {
    errors.password = "Passsword is Required";
  } else if (!checkPass.test(values.password)) {
    errors.password = "Invalid must be matched (P@ssword123)";
  }

  // if (!values.confpass) {
  //   errors.confpass = "Confirme your Password";
  //   console.log(values.confpass);
  // } else if (values.confpass !== values.password) {
  //   errors.confpass = "Must be matched password";
  // }

  return errors;
};

export default AdminValidate;
