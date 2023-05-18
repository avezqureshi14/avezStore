import React, { useEffect } from "react";
import {
  Card,
  Row,
  Badge,
  Col,
  Image,
  Rate,
  Typography,
  Tag,
  Button,
} from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Featured from "../Featured/Featured";
import SpecificationsCard from "../Specification";
const { Title, Text } = Typography;
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const rating = 4.5;
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const productId = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/products/${productId.id}`
        );
        console.log(res.data); // check if the response is coming back as expected
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId.id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
    <div className="Productcontainer">
      <Card style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Image src={product.images[1]} />
          </Col>
          <Col span={12}>
            <Title level={1}>{product.name}</Title>
            <Tag color="blue">{product.categories}</Tag>
            <div className="rating" style={{ marginLeft: "-1rem" }}>
              <Rate allowHalf defaultValue={rating} />
            </div>
            <Title level={2} strong>${product.price}</Title>
            <div style={{marginTop:"1rem"}} className="status">
            <Tag color="red">{product.status}</Tag>
            </div>
            <div className="badge">
            <div style={{ position: 'absolute', top: '35px', left: '-243px' }}>
    <Badge count="50% OFF" style={{ backgroundColor: '#52c41a' }} />
  </div>
            </div>
            <br />
            <br />
            <Text>
             {product.description}
            </Text>
            <br />
            <br />
            <div className="btns">
              <Button
                style={{ backgroundColor: "#374151" }}
                type="primary addToCart"
                block
              >
                Add to Cart
              </Button>
            </div>
            <div className="qty">
              <Button style={{ margin: "1rem" }} onClick={decreaseQuantity}>
                -
              </Button>
              <span>{quantity}</span>
              <Button style={{ margin: "1rem" }} onClick={increaseQuantity}>
                +
              </Button>
            </div>
        
          </Col>
        </Row>
      </Card>
    </div>
    <div className="Productcontainer">
    <SpecificationsCard/>
    </div>
    <Featured/>
    
    </>
    );
};

export default ProductDetail;
