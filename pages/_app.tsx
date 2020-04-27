import { Provider } from "react-redux";
import { store } from "../store/store";
import "normalize.css";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
