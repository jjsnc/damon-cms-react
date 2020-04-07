import React from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
} from 'antd';
import './index.less'
const { Option } = Select;


const prefixSelector = (
    <Form.Item name="prefix"
        noStyle >
        <Select
            style={{
                width: 70,
            }}


        >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);


export default class Register extends React.Component {
    componentDidMount() {
        //每次进入登录页清除之前的登录信息
    }
    loginReq = (params) => {
        window.location.href = '/#/';
    };
    render() {
        return (
            <div className="register-page">
                <div className="logo">
                    <img src='/assets/register-logo@2x.png' alt="官网注册logo" width="116" height="22"></img>
                </div>
                <div className="content">
                    <div className="register-area">
                        <h3 className="title-3">注 册</h3>
                        <h5 className="title-5">欢迎注册AITIME账号</h5>
                    <RegisterForm />
                    </div>

                </div>
            </div>
        )
    }
}

class RegisterForm extends React.Component {
    registerFormRef = React.createRef();
    onFinish = values => {
        console.log(values);
        window.location.href = '/#/';
    }
    render() {
        return (
            <div>
                <Form
                    ref={this.registerFormRef}
                    ame="control-ref"
                    onFinish={this.onFinish}
                    initialValues={{
                        prefix: '86',
                    }}
          
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '登录名（请输入3~20位数字或者字母加数字',
                                whitespace: true,

                            },
                            {
                                pattern: new RegExp('^[a-zA-Z0-9_-]{3,20}$', 'g'),
                                message: '登录名（请输入3~20位数字或者字母加数字'
                            }
                        ]}
                    >
                        <Input placeholder='登录名（请输入3~20位数字或者字母加数字）' />
                    </Form.Item>
                    <Form.Item
                        name="公司名字"
                        rules={[
                            {
                                required: true,
                                message: '请输入公司名称!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder='公司名称' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            placeholder="密码"
                            autoComplete="off"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入确认密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('你输入的两个确认密码不匹配!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="确认密码"
                            autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        name="联系人"
                        rules={[
                            {
                                required: true,
                                message: '请输入联系人!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder='联系人' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: '请输入正确的邮箱!',
                            },
                            {
                                required: true,
                                message: '请输入你的邮箱!',
                            },
                        ]}
                    >
                        <Input placeholder="邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="code"
                    >
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: '请输入你的验证码!' }]}
                                >
                                    <Input />
                                </Form.Item>


                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                        ]}
                    >
                        <Checkbox>
                            我已经阅读并同意<a href="htttp://www.baidu.com">服务协议</a>和<a href="htttp://www.baidu.com">隐私政策</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit"> Register</Button>
                    </Form.Item>
                    <Form.Item  >
                        <Button type="primary" > 登陆</Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }

}