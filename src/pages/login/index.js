import React from 'react'
import { Form, Input, Button} from 'antd'
import Footer from '../../components/Footer'
import './index.less'
export default class Login extends React.Component {
    state = {};
    componentDidMount() {
        //每次进入登录页清除之前的登录信息

    }

    loginReq = (params) => {
        window.location.href = '/#/';
    };

    render() {
        return (
            <div className="login-page">
                <div className="login-header">
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt="慕课后台管理系统" />
                        React全家桶+AntD 共享经济热门项目后台管理系统
                    </div>
                </div>
                <div className="login-content-wrap">
                    <div className="login-content">
                        <div className="word">共享出行 <br />引领城市新经济</div>
                        <div className="login-box">
                            <div className="error-msg-wrap">
                                <div
                                    className={this.state.errorMsg ? "show" : ""}>
                                    {this.state.errorMsg}
                                </div>
                            </div>
                            <div className="title">慕课欢迎你</div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
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
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    label="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="paddword"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button htmlType="submit" type="primary"> Submit </Button>
                    <Button htmlType="button" onClick={this.onReset}>Reset </Button>
                </Form.Item>
            </Form>
        )
    }
}
