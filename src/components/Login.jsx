import React, { useState } from 'react';
import { Form, Input,Card, Button, Alert } from 'antd';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
const LoginForm = () => {
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:8800/api/auth/login', values);
      form.resetFields();
      setLoginError('');
      alert('Logged in successfully');
      navigate('/')
    } catch (error) {
      console.error(error);
      setLoginError('Login failed');
    }
  };

  return (
    <Card style={{margin:'3rem'}} >
    <Form form={form} onFinish={handleSubmit}>
      {loginError && <Alert message={loginError} type="error" />}
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <p>Not yet Regsitered, <Link to='/register' > Register</Link></p>
    </Form>
    </Card>
  );
};

export default LoginForm;
