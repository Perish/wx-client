import React from 'react';

export default ({status, message, type = ""}) => {
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