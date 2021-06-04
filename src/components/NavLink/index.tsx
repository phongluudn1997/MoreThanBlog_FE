import { Link, useRouteMatch } from "react-router-dom";
import styles from "./NavLink.module.css";
import classNames from "classnames";

type NavLinkProps = {
  to: string;
  [key: string]: unknown;
};

function NavLink(props: NavLinkProps) {
  const match = useRouteMatch(props.to);
  const isMatch = !!match && match.isExact;
  return (
    <Link
      className={isMatch ? classNames(styles.tab, styles.active) : styles.tab}
      {...props}
    />
  );
}

export { NavLink };
