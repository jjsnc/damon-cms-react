
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Home extends React.Component {
    render() {

        return (
            <div>
              home
            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList']),
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
});

export default connect(mapState, mapDispatch)(Home);
