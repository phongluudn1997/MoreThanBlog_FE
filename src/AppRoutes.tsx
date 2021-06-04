import { Route, Switch } from "react-router-dom";
import { About } from "screens/About";
import { Articles } from "screens/Articles";
import { Contact } from "screens/Contact";
import { NotFoundScreen } from "screens/NotFound";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Articles} exact />
      <Route path="*" component={NotFoundScreen} />
    </Switch>
  );
}

export default AppRoutes;
