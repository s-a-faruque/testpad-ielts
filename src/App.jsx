import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './assessment/question'
import AnswerSheet from './assessment/answersheet'
import { Layout, Space } from 'antd';
import { Col, Row } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Space
      direction="vertical"
      size="middle"
    >
      <Layout>
        <Content>
          <Row>
            <Col span={24}><h1>[ TLI ] IELTS Test Pad</h1></Col>
          </Row>
          <Row>
            <Col span={12}><Question></Question></Col>
            <Col span={12}><AnswerSheet></AnswerSheet></Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Space>
  )
}

export default App
