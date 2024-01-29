import { useState } from "react";
import { api } from "./baseurl";

export const Auth = async (arg, form) => {
  try {
    const { data } = await api.get(arg);
    const finder = data.find((i) => i.email === form.email);
    if (!finder) {
      alert("User Not Found");
      throw new Error("User Not Found");
    }

    const comparePassword = finder.password === form.password;

    if (!comparePassword) {
      alert("Password Not Correct");
      throw new Error("Password Not Correct");
    }

    return finder;
  } catch (e) {
    throw new Error(e.message);
  }
};
