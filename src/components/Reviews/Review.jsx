import React, { useState, useEffect } from 'react';
import { Form, Input, Button, List, Card } from 'antd';
import axios from 'axios';
import './Review.css'
import { useNavigate } from 'react-router-dom';
const { Item } = Form;

function Review() {
  const [messages, setMessages] = useState([]);
const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post('http://localhost:8800/messages', values)
      .then((response) => {
        navigate('/')
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div className="reviewMain">
    <Card className='review-card' >
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>We are always there for your help</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Item label="Your name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Item>
        <Item label="Title of your message" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
          <Input />
        </Item>
        <Item label="Describe your Feedback/Complaint" name="message" rules={[{ required: true, message: 'Please enter the message' }]}>
          <Input.TextArea />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Item>
      </Form>

     
    </div>
    </Card>
    </div>
  );
}

export default Review;
