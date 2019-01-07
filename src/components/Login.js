import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import InputWithLabel from './InputWithLabel';
import Alert from './Alert';

const LOGIN = gql`
mutation LOGIN($login: String!, $password: String!){
  login(login:$login, password:$password) {
    token
    errors
  }
}
`

class Login extends Component {

  state = {
    login: "",
    password: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  // 
  render() {
    return(
      <Mutation mutation={LOGIN}>
        {(login, {loading, data, error}) => {
        if(data && data.login && data.login.token) {
          localStorage.setItem("_ilike_cook", data.login.token);
          localStorage.setItem("success", "登陆成功");
          return <Redirect to={'/'} />
        }
        return (
        <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <div style={{ flex: 8, display: "flex", flexDirection:"row", alignItems: "center"}}>
            <form 
              style={{width: "320px"}}
              onSubmit={ e => {
                e.preventDefault();
                login({
                  variables: {...this.state}
                })
              }}
            >
              <h2 style={{marginBottom: "40px", textAlign: "center"}}>欢迎回来</h2>
              {data && data.login && data.login.errors && <Alert status="danger" message={data.login.errors} /> }
              {<Alert status="success" type="ls" />}
              <InputWithLabel 
                type="text"
                name="login"
                onChange={this.onChange}
                placeholder="用户名或邮箱"
              />
              <InputWithLabel 
                type="password"
                name="password"
                onChange={this.onChange}
                placeholder="密码"
              />
              <div className="form-group" style={{textAlign: "center"}}>
                <button type="submit" disabled={loading===false ? null : "disabled"} className="btn btn-primary" style={{borderRadius: "3rem", width: "70%", height: "50px", fontSize: "25px", fontWeight: "300", boxShadow:"2px 4px 12px rgb(208, 208, 208)", marginTop: "20px"}}>{loading===false ? "登陆" : "登陆..."}</button>
              </div>
            </form>
          </div>
          <div style={{display: "flex", flexDirection: "row", flex: 1,  alignItems: "center"}}>
            <Link to="/sessions/signup">还没用户，注册</Link>
          </div>
        </div>
        )}}
      </Mutation>

    )
  }
}

export default Login;