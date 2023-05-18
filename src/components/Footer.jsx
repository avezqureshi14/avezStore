import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const links = [
  {
    title: "Get to Know Us",
    children: [
      { title: "Careers", href: "#" },
      { title: "Blog", href: "#" },
      { title: "About Amazon", href: "#" },
      { title: "Investor Relations", href: "#" },
      { title: "Amazon Devices", href: "#" },
    ],
  },
  {
    title: "Make Money with Us",
    children: [
      { title: "Sell products on Amazon", href: "#" },
      { title: "Sell apps on Amazon", href: "#" },
      { title: "Become an Affiliate", href: "#" },
      { title: "Advertise Your Products", href: "#" },
      { title: "Self-Publish with Us", href: "#" },
      { title: "Host an Amazon Hub", href: "#" },
    ],
  },
  {
    title: "Amazon Payment Products",
    children: [
      { title: "Amazon Rewards Visa Signature Cards", href: "#" },
      { title: "Amazon.com Store Card", href: "#" },
      { title: "Amazon Business Card", href: "#" },
      { title: "Amazon Business Line of Credit", href: "#" },
      { title: "Shop with Points", href: "#" },
      { title: "Credit Card Marketplace", href: "#" },
      { title: "Reload Your Balance", href: "#" },
      { title: "Amazon Currency Converter", href: "#" },
    ],
  },
  {
    title: "Let Us Help You",
    children: [
      { title: "Amazon and COVID-19", href: "#" },
      { title: "Your Account", href: "#" },
      { title: "Your Orders", href: "#" },
      { title: "Shipping Rates & Policies", href: "#" },
      { title: "Returns & Replacements", href: "#" },
      { title: "Manage Your Content and Devices", href: "#" },
      { title: "Amazon Assistant", href: "#" },
      { title: "Help", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <FacebookOutlined />, href: "#" },
  { icon: <TwitterOutlined />, href: "#" },
  { icon: <InstagramOutlined />, href: "#" },
  { icon: <YoutubeOutlined />, href: "#" },
];

const FooterComponent = () => (
  <Footer style={{ backgroundColor: "rgb(26 30 36)" ,color:"#fff" }}>
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <Row gutter={[32, 16]}>
          {links.map((link, i) => (
            <Col key={i} xs={12} sm={12} md={6} lg={6} xl={6}>
              <Space direction="vertical" size={4}>
                <Title style={{ color:"#fff" }} level={5}>{link.title}</Title>
                {link.children.map((child, j) => (
                  <Text key={j}>
                    <a style={{ color:"#fff" }} href={child.href}>{child.title}</a>
                  </Text>
                ))}
              </Space>
            </Col>
          ))}
        </Row>
        <Row justify="space-between" style={{ marginTop: 48 }}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Space>
              {socialLinks.map((socialLink, i) => (
                <a style={{ color:"#fff" }} key={i} href={socialLink.href}>
                  {socialLink.icon}
                </a>
              ))}
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 24 }}>
          <Col>
            <Text style={{ color:"#fff" }}>© 2023 Company Name. All Rights Reserved.</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  </Footer>
);
export default FooterComponent;
