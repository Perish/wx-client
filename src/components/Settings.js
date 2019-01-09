import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Edit from './Settings/Edit';

const WX_SETTING = gql`
  query WX_SETTING {
    wxSetting {
      appId
      appSecret
      token
    }
  }
`

export default () => (
  <div>
    <h4>基本配置</h4>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">公众号开发信息</h5>
        <h6 className="card-subtitle mb-2 text-warning">
         如需更改请前往 <a href="https://mp.weixin.qq.com" style={{color: "#007bff"}} rel="noopener noreferrer" target="_blank">微信公众平台</a> , 拷贝 AppID 和 AppSecret 填写到下面。
        </h6>
          <Query query={WX_SETTING} fetchPolicy="network-only">
          {({ loading, data: { wxSetting }, error }) => {
            if (loading) return <div>loading....</div>
            if (error) return <div>{error}</div>
            if (wxSetting) {
              return <Edit setting={wxSetting}/>
            }
            return <Edit />
          }}
          </Query>
      </div>
    </div>
  </div>
)
