import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;
class NavLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentKey: ''
        };

    }
    componentDidMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <NavLink to="/home" onClick={this.homeHandleClick}>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt="" />
                        <h1>Imooc MS</h1>
                    </div>
                </NavLink>
                <Menu
                    mode="vertical"
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft)