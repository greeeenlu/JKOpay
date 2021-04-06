import Users from "../components/User/Users";
import InputField from "../components/Inputs/TextField";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useRef } from "react";
import { signup } from "../actions";

const mapStateToProps = (state) => ({
  user: state.user
});

const passwordValidate = (email, password) => {
  if (password.length < 6) {
    alert("Password Error: \n password length should be at lease 6 characters");
  }
  const account = email.split("@")[0];
  if (account.length < 6) {
    const regExp = new RegExp(account, "g");
    if (regExp.test(password)) return false;
  } else {
    for (let i = 0; i <= account.length - 6; i++) {
      const pattern = account.slice(i, i + 6);
      const regExp = new RegExp(pattern, "g");
      let test = regExp.test(password);
      if (test) {
        alert(
          "Password Error: \n your password is very similar to your account"
        );
        return false;
      }
    }
  }
  return true;
};

const confirmPassword = (pwd, comfirmPwd) => {
  if (pwd !== comfirmPwd)
    alert("Password Error:\n please confirm your password again");
  return pwd === comfirmPwd;
};

function Signup({ user, dispatch }) {
  const email = useRef("");
  const password = useRef("");
  const confirmPwd = useRef("");
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log("data", data);
    const isValid =
      passwordValidate(data.email, data.password) &&
      confirmPassword(data.password, data.confirmPassword);
    if (isValid) {
      dispatch(
        signup({
          userType: user.userType,
          email: data.email,
          password: data.password
        })
      );
      alert("Signup Success!");
      history.push("/login");
    }
  };

  return (
    <div className="login">
      <Users />
      <div className="secondary-text py-16">
        <p>
          {`Hello ${user.userType}!`}
          <br />
          Please fill out the form below to create account
        </p>
      </div>
      <div className="form">
        <form id="form-signup" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            value={email}
            type="email"
            label="Email"
            placeholder="Email"
            validate={{
              ...register("email", { required: true, maxLength: 50 })
            }}
          />
          <InputField
            value={password}
            type="password"
            label="Password"
            placeholder="Password"
            validate={{
              ...register("password", {
                required: true
              })
            }}
          />
          <InputField
            value={confirmPwd}
            type="password"
            label="Password"
            placeholder="Confirm Password"
            validate={{
              ...register("confirmPassword", {
                required: true
              })
            }}
          />
          <div className="flex space-between align-center mt-16 ">
            <span className="caption">
              Have Account? <Link to="/login">Login</Link>
            </span>
            <button type="submit" className="btn primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Signup);
