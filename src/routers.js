import Login from "./views/Login";
import Signup from "./views/Signup";

const appRoutes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

export default appRoutes;
