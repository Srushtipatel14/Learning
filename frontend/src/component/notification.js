import NotificationTypes from '../customHooks/hooks';
import { useState } from 'react';

const NotificationComponent = () => {
  const [toast, setToast] = useState(null)
  const showNotification = (type, message) => {
    setToast({ type, message })
  }
  return (
    <div className='container'>
      <div className='header'>Toast Component</div>
      {toast && <NotificationTypes iconType={toast.type} message={toast.message} onclose={() => setToast(null)} />}

      <div className='btndiv'>
        <div className='btncontainer'>
          <button onClick={() => {
            (
              showNotification('successMsg', 'This is a success message')
            )
          }} className='success btn'>Show Success</button>
          <button className='info btn' onClick={() => {
            (
              showNotification('infoMsg', 'This is a info message')
            )
          }}>Show Info</button>
        </div>

        <div className='btncontainer'>
          <button className='warning btn' onClick={() => {
            (
              showNotification('warningMsg', 'This is a warning message')
            )
          }}>Show Warning</button>
          <button className='error btn' onClick={() => {
            (
              showNotification('errorMsg', 'This is a error message')
            )
          }}>Show Error</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;