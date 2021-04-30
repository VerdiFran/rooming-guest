import React from 'react'
import './App.less'
import {Layout} from 'antd'
import Logo from './components/Logo/Logo'
import {BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {TO_HOME, TO_REGISTRATION} from './routes'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'

const App = () => {
    const {Header, Content, Footer} = Layout

    return (
        <div className="App">
            <Layout className="layout">
                <Header>
                    <Logo/>
                </Header>
                <Content>
                    <Switch>
                        <Route exact path={TO_HOME} render={() => <Home/>}/>
                        <Route path={TO_REGISTRATION} render={() => <Registration/>}/>
                        <Redirect to={TO_HOME}/>
                    </Switch>
                </Content>
                <Footer>Rooming ©2021</Footer>
            </Layout>
        </div>
    )
}

const AppContainer = withRouter(App)

/**
 * Main app, container for app
 * @returns {JSX.Element}
 * @constructor
 */
const MainApp = () => {
    return (
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    )
}

export default MainApp
