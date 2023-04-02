import axios from "axios";

export function userLogin({ user, email, phone, gender }) {
  console.log({ user, email, phone, gender });

  return axios.post("https://dev.octilus.in/api/create.php", {
    name: user,
    email: email,
    phone: phone,
    gender: gender,
  });
}

export function updateAPI({ jobTitle }) {
  return axios.post("https://dev.octilus.in/api/update.php", {
    id: localStorage.getItem("ID"),
    job_title: jobTitle,
  });
}
