import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import InputWithLabel from '../components/InputWithLabel';


const CREATE_WX_SETTING = gql`
mutation CREATE_WX_SETTING($appId: String!, $appSecret: String!) {
  createWxSetting(appId:$appId, appSecret:$appSecret) {
    wxSetting {
      appId
      appSecret
    }
    errors
  }
}
`

// const WX_SETTING = gql`
// query WX_SETTING {
//   wxSetting {
//     appId
//     appSecret
//   }
// }
// `

export default class Settings extends React.PureComponent {

  state = {
    appId: "",
    appSecret: ""
  }

  onChange = e =>  this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h4>基本配置</h4>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">公众号开发信息</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              请前往 <a href="https://mp.weixin.qq.com" style={{color: "#007bff"}} rel="noopener noreferrer" target="_blank">微信公众平台</a> , 拷贝 AppID 和 AppSecret 填写到下面。
            </h6>
                <Mutation mutation={CREATE_WX_SETTING}>
                {(createWxSetting, { loading, data, error }) => {
                  if(error) return `Error! ${error.message}`;
                  let errors = {};
                  if(data && data.createWxSetting && data.createWxSetting.errors) {
                    errors = JSON.parse(data.createWxSetting.errors);
                  }
                  return (
                    <form
                      style={{width: "60%"}}
                      onSubmit={e => {
                        e.preventDefault();
                        createWxSetting({variables: this.state})
                      }}
                    >
                      <InputWithLabel
                        type="text"
                        name="appId"
                        onChange={this.onChange}
                        error={errors['app_id']}
                        placeholder="请填写开发者ID(AppID)"
                        helpmsg="开发者ID是公众号开发识别码，配合开发者密码可调用公众号的接口能力。"
                      />
                      <InputWithLabel 
                        type="password"
                        name="appSecret"
                        error={errors['app_secret']}
                        onChange={this.onChange}
                        placeholder="请填写开发者密码(AppSecret)"
                        helpmsg="开发者密码是校验公众号开发者身份的密码，具有极高的安全性。切记勿把密码直接交给第三方开发者或直接存储在代码中。如需第三方代开发公众号，请使用授权方式接入。"
                      />
                      <button type="submit" disabled={loading===false ? null : "disabled"} className="btn btn-success btn-sm">{loading===false ? "配置" : "配置..."}</button>
                    </form>
                  )}}
                </Mutation>
          </div>
        </div>
      </div>
    )
  }
}