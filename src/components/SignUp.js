import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
import { Redirect, Link } from 'react-router-dom';
import InputWithLabel from './InputWithLabel';

const SIGN_UP = gql`
  mutation SignUp($input: UserAttributes!) {
    signUp(input: $input) {
      success
      errors 
    }
  }
`;

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password_confirmation: '',
    password: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Mutation mutation={SIGN_UP}>
      {(signUp, {loading, data, error }) => {
        if(error) return `Error! ${error.message}`;
        let errors = {};
        if(data && data.signUp && data.signUp.errors) {
          errors = JSON.parse(data.signUp.errors);
        }
        if(data && data.signUp && data.signUp.success) {
          localStorage.setItem("success", "注册成功请登陆！！！");
          return <Redirect to={'/sessions/login'} />
        }
        return (
          <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{ flex: 8, display: "flex", flexDirection:"row", alignItems: "center"}}>
              <form
                style={{width: "320px"}}
                onSubmit={e => {
                  e.preventDefault();
                  signUp({ 
                    variables: { 
                      input: {
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password,
                        passwordConfirmation: this.state.password_confirmation
                      }
                    } 
                  })
                }}
              >
                <h2 style={{marginBottom: "40px", textAlign: "center"}}>期望您的加入</h2>
                <InputWithLabel 
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  error={errors['username']}
                  placeholder="用户名"
                />

                <InputWithLabel 
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  error={errors['email']}
                  placeholder="邮箱地址"
                />

                <InputWithLabel 
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  error={errors['password']}
                  placeholder="密码"
                />

                <InputWithLabel 
                  type="password"
                  name="password_confirmation"
                  onChange={this.onChange}
                  error={errors['password_confirmation']}
                  placeholder="确认密码"
                />
                <div className="form-group" style={{textAlign: "center"}}>
                  <button type="submit" disabled={loading===false ? null : "disabled"} className="btn btn-primary center" style={{borderRadius: "3rem", width: "70%", height: "50px", fontSize: "25px", fontWeight: "300", boxShadow:"2px 4px 12px rgb(208, 208, 208)", marginTop: "20px"}}>{loading===false ? "加入" : "加入..."}</button>
                  
                </div>
              </form>
            </div>
            <div style={{display: "flex", flexDirection: "row", flex: 1,  alignItems: "center"}}>
              <Link to="/sessions/login">已有用户，登陆</Link>
            </div>
          </div>
        )
    }}
      </Mutation>
    )
  }
}

export default SignUp;