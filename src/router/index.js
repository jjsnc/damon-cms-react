import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Home from '../pages/home'
import OrderDetail from "../pages/order/detail"
import Common from '../pages/common'
import Buttons from '../pages/ui/buttons'
import Modals from '../pages/ui/modals'
import Loadings from '../pages/ui/loadings'
import Notice from '../pages/ui/notice'
import Messages from '../pages/ui/messages'
import Carousel from '../pages/ui/carousel'
export default class ERouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path="/common" redenr={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}></Route>
                            </Common>
                        } />
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}