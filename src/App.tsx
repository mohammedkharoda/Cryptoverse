import { Layout, Space, Typography } from "antd";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  CryptoDetails,
  Cryptocurrencies,
  Homepage,
  Navbar,
  News,
} from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies simplified />}
              />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News simplified />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
