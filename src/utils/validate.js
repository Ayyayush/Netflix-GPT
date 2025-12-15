// utils/validate.js

export const checkValidData = (name, email, password) => {

  // ✅ Name validation (ONLY for Sign Up)
  if (name !== null) {
    const isNameValid = /^[A-Za-z]+([ .'-][A-Za-z]+)*$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  // ✅ Email validation
  const isEmailValid =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  if (!isEmailValid) return "Email ID is not valid";

  // ✅ Password validation
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!isPasswordValid)
    return "Password must be at least 8 characters and contain letters & numbers";

  return null; // ✅ everything valid
};
