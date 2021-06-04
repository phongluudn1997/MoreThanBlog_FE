import { Link, useRouteMatch } from "react-router-dom";

type NavLinkProps = {
  to: string;
  [key: string]: unknown;
};

function NavLink(props: NavLinkProps) {
  const match = useRouteMatch(props.to);
  const isMatch = !!match && match.isExact;
  return <Link style={isMatch ? { color: "red" } : undefined} {...props} />;
}

export { NavLink };
