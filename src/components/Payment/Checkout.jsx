import React, { useState } from "react";
import { Form, Input, Button, Row, Col, message, Card, Tag, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import CheckoutPage from "../Slips/Generate";
const CheckoutForm = () => {
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);
  const onFinish = async (values) => {
    try {
      // Make a POST request to your backend API endpoint to create the checkout
      const response = await fetch("http://localhost:8800/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setTransactionSuccessful(true);
        message.success("Transaction successfull");
      } else {
        const errorMessage = await response.text();
        message.error(errorMessage || "Transaction Failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
      message.error("An error occurred while creating the checkout");
    }
  };

  return (
    <Card style={{ margin: "3rem" }}>
      {transactionSuccessful ? (
        <>
        <Link to={`/review`}>
        <Button style={{backgroundColor:"blue", color:'#fff', margin:"15px"}} >Do you have complaint or feedback, feel free to put a message here!</Button>
        </Link>
        <h1>Your Transacction and Purchase</h1>
        <CheckoutPage/>
        </>

      ) : (
        <>
          <Form onFinish={onFinish} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={["address", "street"]}
                  label="Street"
                  rules={[
                    { required: true, message: "Please enter the street" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["address", "city"]}
                  label="City"
                  rules={[{ required: true, message: "Please enter the city" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={["address", "state"]}
                  label="State"
                  rules={[
                    { required: true, message: "Please enter the state" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["address", "zipCode"]}
                  label="Zip Code"
                  rules={[
                    { required: true, message: "Please enter the zip code" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={["address", "country"]}
                  label="Country"
                  rules={[
                    { required: true, message: "Please enter the country" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["cardDetails", "cardNumber"]}
                  label="Card Number"
                  rules={[
                    { required: true, message: "Please enter the card number" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name={["cardDetails", "cardholderName"]}
                  label="Cardholder Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the cardholder name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["cardDetails", "expirationDate"]}
                  label="Expiration Date"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the expiration date",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["cardDetails", "cvv"]}
                  label="CVV"
                  rules={[{ required: true, message: "Please enter the CVV" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Confirm Payement
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </Card>
  );
};

export default CheckoutForm;
