
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../home/store';
class Home extends React.Component {
    render() {
        const { topicList } = this.props
        return (
            <div>
                {
                    topicList.map((item, index) => {
                        return (
                            <div key={index} to={'/detail/' + item.get('id')}>
                                <div >
                                    <img alt='' className='pic' src={item.get('imgUrl')} />
                                    <div>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                        <div>Login page</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
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
