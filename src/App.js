import React from "react";
import "./App.css";
import HomePage from "./WebPages/HomePage/HomePage";
import 'antd/dist/antd.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import PageFooter from "./components/PageFooter";

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <HomePage />
      </Content>
      <Footer>
        <PageFooter />  
      </Footer>      
    </Layout>
  );
}

export default App;

