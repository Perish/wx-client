import React from 'react';

const Message = ({status, message, type = ""}) => {
  let msg = "";
  if(type === "ls") {
    msg = localStorage.getItem(status);
    localStorage.removeItem(status);
  } else {
    msg = message;
  }
  return status && msg && (
    <div className={["alert", `alert-${status}`].join(' ')} role="alert">
      {msg}
    </div>
  )
}

export default Message;