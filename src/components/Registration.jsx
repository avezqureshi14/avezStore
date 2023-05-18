import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';
const RegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:8800/api/auth/register', values);
      message.success('User registered successfully');
      form.resetFields();
      navigate('/login')
    } catch (error) {
      console.error(error);
      message.error('An error occurred');
    }
  };

  return (
    <Card style={{margin:'3rem'}} >
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <p>Already Regsitered, <Link to='/login' > Login</Link></p>
    </Form>
    </Card>
  );
};

export default RegisterForm;
