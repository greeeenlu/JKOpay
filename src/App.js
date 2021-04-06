import "./styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import background from "./assets/images/img_town_370x170@3x.svg";
import appRouter from "./routers";

const appRoutes = appRouter.map((route) => {
  return (
    <Route path={route.path} key={route.name} component={route.component} />
  );
});

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <Switch>
          {appRoutes}
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}
