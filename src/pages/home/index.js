/*
* @Author: jjsnc
* @Date:   2019-11-16 15:29:37
* @Last Modified by:   jjsnc
* @Last Modified time: 2019-11-17 11:10:03
*/
import React from 'react';
import { connect } from 'react-redux';
class Home extends React.Component {
    render() {
        const { state } = this.props
        console.log(state, "state")
        return ("主页面")
    }
    componentDidMount() { }

}

const mapState = (state) => ({
    state: state,
})
const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Home);
