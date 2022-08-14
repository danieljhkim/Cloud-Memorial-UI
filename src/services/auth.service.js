import RestService from "./wrapper/restService";

const API_URL = process.env.API_URL || "http://localhost:4000/api/auth/";

exports.auth = () => {

  const _register = (username, email, password) => {
    return RestService.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };

  const _login = async (username, password) => {
    return RestService
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  
  const _logout = () => {
    localStorage.removeItem("user");
  };

  return {
    register: _register,
    login: _login,
    logout: _logout,
  }
}
