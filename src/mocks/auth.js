import axios from "axios";

class AuthApi {
  async getUser() {
    try {
      const response = await axios.get(
        `http://localhost:5003/userapp/user/me`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("acessToken")}`,
          },
        }
      );
      if (response.data.status == "SUCCESS") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async register(data) {
    console.log("data in mocks :", data);
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/auth/register`,
        data
      );

      console.log("response in mocks :", response);

      if (response.data.status === "SUCCESS") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(data) {
    try {
      const response = await axios.post(
        `http://localhost:5003/userapp/auth/login`,
        data
      );

      if (response.data.status === "SUCCESS") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const authApi = new AuthApi();
