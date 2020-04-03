import React from 'react'
import { Row,Col } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import NavLeft from '../../components/NavLeft'
import '../../style/common.less'
class Admin extends React.Component{

    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                    <Header/>
                    <div className="content ">
                        {/* <Home/> */}
                        {this.props.children}
                    </div>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
export default connect()(Admin)