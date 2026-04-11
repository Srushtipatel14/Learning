import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleInfo } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import { IoWarning } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const icon = {
    successMsg: <FaCheckCircle size={24} />,
    infoMsg: <FaCircleInfo />,
    errorMsg: <VscError />,
    warningMsg: <IoWarning />
}
const NotificationTypes = (data, onclose = () => { }) => {
    return (
        <div className={`toastmsg ${data.iconType} bottom-right`}>
            {icon[data.iconType]}
            {data.message}
            <IoClose size={24} onClose={() => {
                onclose();
            }} />
        </div>
    )
}

export default NotificationTypes;