import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import InputWithLabel from '../InputWithLabel';
import Alert from '../Alert';

const CREATE_WX_SETTING = gql`
mutation CREATE_WX_SETTING($appId: String!, $appSecret: String!) {
  createWxSetting(appId:$appId, appSecret:$appSecret) {
    wxSetting {
      appId
      appSecret
      token
    }
    errors
  }
}
`
export default class Edit extends React.PureComponent {

  state = {
    appId: "",
    appSecret: "",
    token: ""
  }
  
  static defaultProps = {
    setting: {}
  }

  componentDidMount() {
    const { setting: {appId, appSecret, token} }  = this.props;
    this.setState({
      appId,
      appSecret,
      token
    })
  }

  onChange = e =>  this.setState({ [e.target.name]: e.target.value });

  render() {
    return(
      <Mutation mutation={CREATE_WX_SETTING}>
      {(createWxSetting, { loading, data, error }) => {
        if(error) return `Error! ${error.message}`;
        let errors = {}
        if (data && data.createWxSetting && data.createWxSetting.errors) {
          errors = JSON.parse(data.createWxSetting.errors);  
        }
        let token = ""
        if(this.state.token) {
          token = this.state.token
        }
        if(data && data.createWxSetting && data.createWxSetting.wxSetting && data.createWxSetting.wxSetting.token) {
          token = data.createWxSetting.wxSetting.token
        }
        return (
          <form
            style={{width: "60%"}}
            onSubmit={e => {
              e.preventDefault();
              createWxSetting({variables: this.state})
            }}
          >
          {data && data.createWxSetting && data.createWxSetting.wxSetting && <Alert status="success" message="已经配置" />}
            <InputWithLabel
              type="text"
              name="appId"
              onChange={this.onChange}
              value={this.state.appId}
              error={errors['app_id']}
              placeholder="请填写开发者ID(AppID)"
              helpmsg="开发者ID是公众号开发识别码，配合开发者密码可调用公众号的接口能力。"
            />
            <InputWithLabel 
              type="text"
              name="appSecret"
              value={this.state.appSecret}
              error={errors['app_secret']}
              onChange={this.onChange}
              placeholder="请填写开发者密码(AppSecret)"
              helpmsg="开发者密码是校验公众号开发者身份的密码，具有极高的安全性。切记勿把密码直接交给第三方开发者或直接存储在代码中。如需第三方代开发公众号，请使用授权方式接入。"
            />
            <div className="form-group">
            <button type="submit" disabled={loading===false ? null : "disabled"} className="btn btn-success btn-sm">{loading===false ? "配置" : "配置..."}</button>
            </div>
            {
              token && 
              <div className="alert alert-primary" role="alert">
                请把下列链接拷贝到微信公众号的服务器配置里:
                <p>https://wx-ruby-server.herokuapp.com/wx/{token}/recieve</p> 
              </div>
            }
          </form>
        )}}
      </Mutation>
    )
  }
}