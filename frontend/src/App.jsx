import RouterProvider from "./routes/RouterProvider";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "./context/UserContext";

axios.defaults.baseURL = "http://localhost:8080/api/v1/user";
axios.defaults.withCredentials = true

const App = () => {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <RouterProvider />
      </UserContextProvider>
    </>
  );
};

export default App;
