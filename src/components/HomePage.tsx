import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import spin from "../assets/Double.svg";

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalState = data?.data?.stats;
  if (isFetching) {
    return (
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={spin} />
      </div>
    );
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
        <Title level={2} className="home-title">
          Top 10 Cryptocurreencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
