import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import Docspage from "./components/DocsPage";
import CalendarPage from "./components/CalendarPage";
import LoginPage from "./components/LoginPage";

const { Header, Footer, Content } = Layout;

class App extends Component {
  state = {
    current: "index"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <BrowserRouter>
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
              <Menu.Item key="docs">
                <NavLink to="/docs">
                  <Icon type="book" /> Docs
                </NavLink>
              </Menu.Item>
              <Menu.Item key="calendar">
                <NavLink to="/calendar">
                  <Icon type="calendar" /> Calendar
                </NavLink>
              </Menu.Item>
              <Menu.Item key="login">
                <NavLink to="/">
                  <Icon type="login" />
                  Login
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Route exact path="/" component={LoginPage} />
            <Route path="/index" component={HomePage} />
            <Route path="/docs" component={Docspage} />
            <Route path="/calendar" component={CalendarPage} />
          </Content>
          <Footer>
            Copyright <Icon type="copyright" /> Classroom+. All Right Reserved.
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;