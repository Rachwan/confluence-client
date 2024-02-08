import "./App.css";
import AppRoutes from "./Routes/AppRoutes.js";
import { Helmet } from "react-helmet-async";
import favicon from "./Assets/Icons/faviconn.svg";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AppRoutes />
    </div>
  );
}

export default App;
