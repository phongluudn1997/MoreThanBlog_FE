import { Counter } from "./feature/counter/Counter";
import { Route, Switch } from "react-router-dom";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/about" component={Counter} />
      <Route path="/contact" component={Counter} />
      <Route path="/" component={Counter} />
      <Route path="*" component={Counter} />
    </Switch>
  );
}

export default AppRoutes;
