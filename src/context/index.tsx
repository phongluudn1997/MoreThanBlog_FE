import { BrowserRouter as Router } from "react-router-dom";
import { store } from "@redux/store";
import { Provider } from "react-redux";

function AppProviders({ children }: any) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

export { AppProviders };
