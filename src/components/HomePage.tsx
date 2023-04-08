import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/*Total crypto*/}
        <Col span={12}>
          <Statistic title="Total Crypto Curreience" value="5" />
        </Col>
        {/*  Exchanges*/}
        <Col span={12}>
          <Statistic title="Exchanges" value="5" />
        </Col>
        {/*  Market cap*/}
        <Col span={12}>
          <Statistic title="Market Capitals" value="5" />
        </Col>

        {/*  24h volume*/}
        <Col span={12}>
          <Statistic title="24 hour volume" value="5" />
        </Col>

        {/*  Total market*/}
        <Col span={12}>
          <Statistic title="Total market" value="5" />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
