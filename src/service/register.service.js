import { api } from "./baseurl";

const Register = async (arg, form) => {
  try {
    const { data } = await api.get(arg);

    const isEmailTaken = data.find((u) => u.email === form.email);

    if (isEmailTaken) {
      alert("Email is already registered");
      throw new Error("Email is already taken");
    } else if (confirmPassword) {
    }

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default Register;
