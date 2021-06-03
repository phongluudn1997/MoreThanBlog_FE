import { Counter } from "./feature/counter/Counter";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <AppRoutes />
    </div>
  );
}
type NavLinkProps = {
  to: string;
  [key: string]: unknown;
};
function NavLink(props: NavLinkProps) {
  const match = useRouteMatch(props.to);
  const isMatch = !!match && match.isExact;
  return <Link style={isMatch ? { color: "red" } : undefined} {...props} />;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

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

export default App;
