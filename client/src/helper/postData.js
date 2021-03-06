import axios from "axios";

export const postData = async (path, data) => { //*
  const token = localStorage.getItem("token");
  console.log("data Post", data);
  const response = await axios.post(`${path}`, data, {
    headers: {
      token,
    },
  });
  return response?.data;
};