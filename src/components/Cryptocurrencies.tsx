import React, { FC, useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { LinkOutlined } from "@ant-design/icons";
import spin from "../assets/Double.svg";
interface Cryptodata {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  rank: number;
  price: number;
  marketCap: number;
  change: number;
  coinrankingUrl: string;
}

interface SimplifedData {
  simplified: boolean;
}

const Cryptocurrencies: FC<SimplifedData> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState<Cryptodata[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setCrypto(cryptoList?.data?.coins);
    const filterData = cryptoList?.data?.coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCrypto(filterData);
  }, [cryptoList, searchTerm]);

  if (isFetching) {
    return (
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={spin} />;
      </div>
    );
  }
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptos"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
            <Card style={{ marginTop: "15px" }}>
              <Typography.Title level={5}>
                <Link to={`${currency.coinrankingUrl}`}>
                  Check more about {currency.name} <LinkOutlined />
                </Link>
              </Typography.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
