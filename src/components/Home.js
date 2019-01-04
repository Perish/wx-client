import React from 'react';
import Message from './Message';

const Home = () => {
  return (
    <div className="jumbotron">
      {<Message status="success" type="ls" />}
      <h1 className="display-4">欢迎回来！！！</h1>
      <p className="lead">赠人玫瑰，手有余香</p>
      <hr className="my-4" />
      <p>简单的回应，也许给您带来些许帮助。如果感到实用方便，可以分享给你身边的朋友。</p>
      <a className="btn btn-primary btn-lg" href="/help" role="button">联系我们</a>
    </div>
  )
}

export default Home;