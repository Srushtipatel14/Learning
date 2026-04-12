import Home from "./home";
import ToastProvider from "./toast/toastProvider";

const App = () => {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  )
}

export default App