import React from 'react'
import { connect } from 'react-redux'
class Header extends React.Component{
    render(){
        
        return (
            <div>header</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName: '123'
    }
};
export default connect(mapStateToProps)(Header)