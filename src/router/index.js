import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Home from '../pages/home'
import OrderDetail from "../pages/order/detail"
import Common from '../pages/common'
import Buttons from '../pages/ui/buttons'
export default class ERouter extends React.Component {
    render() {
        return(
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