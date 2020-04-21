import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '@/App'
import Login from '@/views/login'
import Register from '@/views/register'
import Admin from '@/views/admin'
import Home from '@/views/home'
import OrderDetail from "@/views/order/detail"
import Common from '@/views/common'
import Buttons from '@/views/ui/buttons'
import Modals from '@/views/ui/modals'
import Loadings from '@/views/ui/loadings'
import Notice from '@/views/ui/notice'
import Messages from '@/views/ui/messages'
import Carousel from '@/views/ui/carousel'
import { getToken } from '@/damon/util/token'
export default class ERouter extends React.Component {
    componentDidMount() {
        let access_token = getToken("access_token")
        if (!access_token) {
            window.location.href = '#/login'
        }
    }
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
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