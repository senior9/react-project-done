import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
