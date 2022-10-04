import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Comp Imports
import { Navbar } from "./components";

// Redux Imports
import {
  postLogins,
  getUserLogin,
  getLoading,
  loading,
} from "./redux/loginSlice/loginSlice";
import Routers from "./routes/Routers";

function App() {
  //==================== Redux Call =========================

  const dispatch = useDispatch();
  const isAuth = useSelector(getUserLogin);
  const loginLoading = useSelector(getLoading);

  //==================== Event Handlers =========================

  const handleLogin = async (req) => {
    dispatch(postLogins(req));
    dispatch(loading());
    // console.log(loginLoading);
  };

  // login props
  const loginProps = {
    isAuth,
    loginLoading,
    handleLogin,
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      {/* Routes */}
      <Routers loginProps={loginProps} />
    </div>
  );
}

export default App;
