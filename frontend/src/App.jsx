import RouterProvider from "./routes/RouterProvider";
import axios from "axios";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider />
    </>
  );
};

export default App;
