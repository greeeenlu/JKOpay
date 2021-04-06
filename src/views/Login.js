import { useRef } from "react";
import Users from "../components/User/Users";
import InputField from "../components/Inputs/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account
});

const accountValidate = (user, account) => {
  console.log("Accountvalid", user, account);
  const isExsit =
    user.userType === account.userType && user.email === account.email;
  if (!isExsit) {
    alert("Account is not exsit! Please sign up!");
    return false;
  }
  const isValid = user.password === account.password;
  if (!isValid) alert("Password Error");
  return isValid;
};

function Login({ user, account }) {
  const email = useRef("");
  const password = useRef("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const currentUser = {
      userType: user.userType,
      email: data.email,
      password: data.password
    };
    if (accountValidate(currentUser, account)) {
      alert("Loign Success!");
    }
  };

  return (
    <div className="login">
      <Users />
      <div className="secondary-text py-16">
        <p>
          {`Hello ${user.userType}!`}
          <br />
          Please fill out the form below to get started
        </p>
      </div>
      <div className="form">
        <form id="form-login" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            value={email}
            type="email"
            label="Email"
            placeholder="Email"
            validate={{
              ...register("email", {
                required: true
              })
            }}
          />
          <InputField
            value={password}
            type="password"
            label="Password"
            placeholder="Password"
            forgetLink={true}
            validate={{
              ...register("password", {
                required: true
              })
            }}
          />
          <div className="flex space-between align-center mt-16 ">
            <span className="caption">
              No Account? <Link to="/signup">Signup</Link>
            </span>
            <button type="submit" className="btn primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Login);
