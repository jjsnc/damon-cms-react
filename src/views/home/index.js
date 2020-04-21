import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
    }
    render() {

        return (
            <div>
                home
            </div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Home);
