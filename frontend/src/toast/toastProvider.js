import React, { useState } from 'react'
import ToastItem from './ToastItem';
import { ToastContext } from './ToastContext';
import "./toast.css";

const ToastProvider = ({ children }) => {

    const [toasts, setToasts] = useState([]);


    const toast = {
        success: (message, duration = 3000) => addToast({ type: "successMsg", message, duration }),
        error: (message, duration = 3000) => addToast({ type: "errorMsg", message, duration }),
        info: (message, duration = 3000) => addToast({ type: "infoMsg", message, duration }),
        warning: (message, duration = 3000) => addToast({ type: "warningMsg", message, duration }),
    }

    const addToast = (data) => {
        const newToast = {
            id: Date.now(),
            type: data.type,
            message: data.message,
            duration: data.duration
        }
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(()=>{
            removeToast(newToast.id);
        },data.duration)
    }

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    return (
        <ToastContext.Provider value={toast}>
            {children}
          <div className='toast-wrapper'>
              {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    type={toast.type}
                    message={toast.message}
                    onclose={() => removeToast(toast.id)}
                />
            ))}
          </div>
        </ToastContext.Provider>
    )
}

export default ToastProvider