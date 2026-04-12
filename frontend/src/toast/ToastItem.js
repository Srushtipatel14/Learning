import { FaCheckCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import { IoWarning, IoClose } from "react-icons/io5";
import  "./toast.css"
const icon= {
  successMsg: <FaCheckCircle size={20} />,
  infoMsg: <FaCircleInfo size={20} />,
  errorMsg: <VscError size={20} />,
  warningMsg: <IoWarning size={20} />,
};


const ToastItem = ({ type, message, onclose }) => {
    return (
        <div className={`toastContainer ${type}`}>
            <span>{icon[type]}</span>
            <span>{message}</span>
            <IoClose size={20} onClick={onclose} style={{ cursor: "pointer" }} />
        </div>
    )
}

export default ToastItem