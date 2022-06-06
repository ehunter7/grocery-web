import axios from "axios";

//eslint-disable-next-line
export default {
  //   //pickup routes
  //   newPickup: (data) => {
  //     return axios.post("/api/pu/newPickup", data);
  //   },
  //   getPickups: () => {
  //     return axios.get("/api/pu/getPickups");
  //   },
  //   updatePU: (id, data) => {
  //     return axios.put("/api/pu/updatePU", { id, data });
  //   },
  //   pickedUp: (id, data, puNumber) => {
  //     return axios.put("/api/pu/pickedUp", { id, data, puNumber });
  //   },
  //   getCompleted: () => {
  //     return axios.get("/api/pu/getCompleted");
  //   },
  //   cancelPickup: (data) => {
  //     return axios.delete("/api/pu/cancelPickup", { data });
  //   },
  //   setToCancel: (data) => {
  //     return axios.put("/api/pu/setToCancel", { data });
  //   },

  //user routes
  register: (data: any) => {
    return axios.post("/api/user/register", data);
  },
  login: (data: any) => {
    return axios.post("/api/user/login", data);
  },
  logout: () => {
    return axios.post("/api/user/logout");
  },
  getUser: () => {
    return axios.get("/api/user/getUser");
  },

  // Family Routes
  getFamily: (data: any) => {
    console.log("xxxxxxxxxxxxx");
    console.log(data);
    return axios.get("./api/user/getFamily", data);
  },

  // Book Routes
  addBook: (user: any, data: any) => {
    return axios.post("/api/book/addBook", { user, data });
  },
  //   getUsers: () => {
  //     return axios.get("/api/users/getusers");
  //   },
  //   updateUser: (data, field, update) => {
  //     return axios.put("/api/users/updateUser", { data, field, update });
  //   },
};
