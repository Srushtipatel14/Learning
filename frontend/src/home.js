import "./App.css";
import { useToast } from "./toast/ToastContext";

const Home = () => {
    const toast = useToast();
  return (
    <div className="homeContainer">
      <h1>Toast Component</h1>
      <div className="btncontainer">
        <button
          className="btn success"
          onClick={() => toast.success("This is a success message!")}
        >
          Show Success
        </button>
        <button
          className="btn error"
          onClick={() => toast.error("This is an error message!")}
        >
          Show Error
        </button>
        <button
          className="btn info"
          onClick={() => toast.info("This is an info message!")}
        >
          Show Info
        </button>
        <button
          className="btn warning"
          onClick={() => toast.warning("This is a warning message!")}
        >
          Show Warning
        </button>
      </div>
    </div>
  );
};

export default Home;
