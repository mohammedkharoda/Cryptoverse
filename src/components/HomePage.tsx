import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalState = data?.data?.stats;
  if (isFetching) {
    return "Loading";
  }
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        {/*Total crypto*/}
        <Col span={12}>
          <Statistic
            title="Total Crypto Curreience"
            value={globalState?.total}
          />
        </Col>
        {/*  Exchanges*/}
        <Col span={12}>
          <Statistic
            title="Exchanges"
            value={millify(globalState.totalExchanges)}
          />
        </Col>
        {/*  Market cap*/}
        <Col span={12}>
          <Statistic
            title="Market Capitals"
            value={millify(globalState.totalMarketCap)}
          />
        </Col>

        {/*  24h volume*/}
        <Col span={12}>
          <Statistic
            title="24 hour volume"
            value={millify(globalState.total24hVolume)}
          />
        </Col>

        {/*  Total market*/}
        <Col span={12}>
          <Statistic
            title="Total market"
            value={millify(globalState.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title></Title>
      </div>
    </>
  );
};

export default Homepage;
