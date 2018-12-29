import React from 'react';

const Message = ({status, message}) => {
  const msg = localStorage.getItem(status);
  localStorage.removeItem(status);
  return status && msg && (
    <div className={["alert", `alert-${status}`].join(' ')} role="alert">
      {msg}
    </div>
  )
}

export default Message;