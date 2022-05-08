import { useState } from "react";
import axios from "axios";
import logodark from "../assets/images/FairshipLogo.svg";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/usersActions";

const URL = "http://134.209.64.28:8084/login";

function Login() {
  const user = useSelector((state) => state.users);
  console.log(user, "999");
  //use dispatch form redux
  const dispatch = useDispatch();
  //useNavigate
  let navigate = useNavigate();
  //local states
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    platformType: "WEB",
  });

  //handle Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    //dispatch loginUser action
    dispatch(loginUser(email, password, platformType));
    navigate("/home");

    // dispatch(login({ email, password }));

    // const response = await axios.post(URL, {
    //   email,
    //   password,
    //   platformType,
    // });
    // console.log(response, "values");
    // const data2 = await response.data;
    // localStorage.setItem("token", response.data.token);
    // console.log(data2, "data");
  };

  const { email, platformType, password } = formValue;
  return (
    <>
      <img className="wave" src="img/wave.png" />
      <div className="container">
        <div className="img">
          <img src={logodark} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={logodark} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Email</h5> */}
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
            </div>
            {/* <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  name="platformType"
                  value={platformType}
                  onChange={handleChange}
                />
              </div>
            </div> */}
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
