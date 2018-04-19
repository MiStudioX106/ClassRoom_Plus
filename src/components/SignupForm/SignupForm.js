import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

class NormalSignupForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input username you want!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
          >
            Signup
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignupForm = Form.create()(NormalSignupForm);
/*
  const SignupForm = Form.create({
      onFieldsChange(dispatch){
        return {
          dispatch();
        }
      },
      mapPropsToFields(props){
        return{
          username:
        }
      }
  })(SignupForm);
  */

export default SignupForm;