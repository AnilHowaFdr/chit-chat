import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import appConfig from "./firebaseConfig.js";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
