import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./index.css";
import { onSuccessfulLogin } from "../../store/userSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeUserName = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onTogglePassVisibility = (e) => {
    setShowPass(!showPass);
  };

  const validateUserNameAndPassword = () => {
    let errors = [];

    if (!/^[A-Za-z]+$/.test(username)) {
      errors.push("Username should only contain letters");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    } else if (!/[0-9]/.test(password)) {
      errors.push("Password must include at least one number.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must include at least one special character.");
    }

    setErrorMsgs([...errors]);

    return errors.length === 0;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setErrorMsgs(["Please fill in all fields"]);
    } else {
      if (validateUserNameAndPassword()) {
        dispatch(onSuccessfulLogin(username));
        navigate("/", { replace: true });
      }
    }
  };

  return (
    <div className="container p-0 login-page">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="hero-container">
            <h1 className="main-header">
              Know Your <br />
              <span>Friends Better</span>
            </h1>
            <img
              src="/images/login-page-image.png"
              alt="login-img"
              className="login-friends-img"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={onSubmitForm}>
            <h2 className="form-header">Join the Fun</h2>
            <div className="input-container">
              <input
                onChange={onChangeUserName}
                className="input-el"
                type="text"
                value={username}
                placeholder="Username"
              />
            </div>
            <div className="input-container">
              <input
                onChange={onChangePassword}
                value={password}
                className="input-el"
                type={showPass ? "text" : "password"}
                placeholder="Password"
              />
              <i
                onClick={onTogglePassVisibility}
                className={
                  "fa-regular " + (showPass ? "fa-eye-slash" : "fa-eye")
                }
              ></i>
            </div>

            <p className="err-msg mb-1">
              {errorMsgs.length > 0 && errorMsgs[0]}
            </p>

            <button className="login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
