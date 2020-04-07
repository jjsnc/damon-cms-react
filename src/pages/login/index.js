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
                        <img src='/assets/logo@2x.png' alt="官网logo" width="160" height="32"></img>
                    </div>
                    <h6 className="title">运用大数据和人工智能技术，助力信用生活</h6>
                    <LoginForm />
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
    onReset = () => {
        this.formRef.current.resetFields();
    };
    render() {
        return (
            <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input className="username"
                     />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input className="password" />
                </Form.Item>
                <Form.Item  >
                    <Button htmlType="submit" type="primary"> Submit </Button>
                    <Button htmlType="button" onClick={this.onReset}>Reset </Button>
                </Form.Item>
            </Form>
        )
    }
}
