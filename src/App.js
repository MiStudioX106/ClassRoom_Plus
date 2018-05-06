import React, { Component } from "react";
import { Layout, Menu, Icon, notification, Button, Popover } from "antd";
import { Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRouter";
import HomePage from "./components/HomepPage";
import DocsPage from "./components/DocsPage";
import CalendarPage from "./components/CalendarPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DiscussPage from "./components/DiscussPage";
import history from "./helpers/history";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clickMenu, clickLogout } from "./actions/MenuActions.js";

const { Header, Footer, Content } = Layout;

const logoutNotification = () => {
  notification.success({
    message: "Logout Success",
    description: "See you next time."
  });
};

class App extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      current: ""
    };
  }

  handleClick = e => {
    const { dispatch } = this.props;
    this.setState(
      {
        current: e.key
      },
      () => {
        if (this.state.current !== "logout") {
          dispatch(clickMenu(this.state.current));
        } else {
          dispatch(clickLogout());
          logoutNotification();
        }
      }
    );
  };

  handleClickforVoiceCommand = () => {
    console.log("VoiceCommandtest");
  };

  render() {
    return (
      <Router history={history}>
        <Layout>
          <Header>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="Homepage">
                <NavLink to="/index">
                  <Icon type="bulb" /> Homepage
                </NavLink>
              </Menu.Item>
              <Menu.Item key="calendar">
                <NavLink to="/calendar">
                  <Icon type="calendar" /> Calendar
                </NavLink>
              </Menu.Item>
              <Menu.Item key="logout">
                <NavLink to="/">
                  <Icon type="logout" />
                  Logout
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Route exact path="/" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/index" component={HomePage} />
            <PrivateRoute path="/docs" component={DocsPage} />
            <PrivateRoute path="/calendar" component={CalendarPage} />
            <PrivateRoute path="/discuss" component={DiscussPage} />
            <a onClick={this.handleClickforVoiceCommand}>
              <Popover
                placement="leftBottom"
                content="歡迎使用"
                title="Voice Command"
              >
                <Button
                  type="primary"
                  shape="circle"
                  icon="customer-service"
                  className="voicecommand"
                />
              </Popover>
            </a>
          </Content>
          <Footer>
            Copyright <Icon type="copyright" /> Classroom+. All Right Reserved.
          </Footer>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { Authenticatation } = state;
  const { Menu } = state;

  return {
    Authenticatation,
    Menu
  };
};

App = connect(mapStateToProps)(App);

export default App;
