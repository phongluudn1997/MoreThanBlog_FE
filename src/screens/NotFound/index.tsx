import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      Sorry...nothing here. <Link to="/">Go Home</Link>
    </div>
  );
};

export { NotFoundScreen };
