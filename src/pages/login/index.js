import React from 'react'
import { Form, Input, Button } from 'antd'
import './index.less'


export default class Login extends React.Component {
    componentDidMount() {
        //每次进入登录页清除之前的登录信息
    }
    loginReq = (params) => {
        window.location.href = '/#/';
    };
    render() {
        return (
            <div className="login-page">
                <div className="login-area">
                    <div className="logo">
                        <img src='/assets/logo@2x.png' alt="官网logo" width="322" height="62"></img>
                    </div>
                    <h6 className="title">运用大数据和人工智能技术，助力信用生活</h6>
                    <LoginForm />
                    <h6 className="title-tips">还没有账号？<span className='go-btn'>立即注册</span></h6>
                </div>

            </div>
        )
    }
}

class LoginForm extends React.Component {
    formRef = React.createRef();
    onFinish = values => {
        console.log(values);
        window.location.href = '/#/';
    };
    render() {
        return (
            <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名'
                        },
                    ]}
                >
                    <Input
                        autoComplete="off"
                        className="username"
                        placeholder="请输入用户名"

                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码'

                        },
                    ]}
                >
                    <Input
                        type="password"
                        autoComplete="off"
                        className="password"
                        placeholder="请输入密码"

                    />
                </Form.Item>
                <Form.Item  >
                    <Button htmlType="submit" type="primary" className={"submit-btn"}> 登陆 </Button>
                </Form.Item>
            </Form>
        )
    }
}
