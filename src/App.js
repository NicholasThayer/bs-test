import React, { Component } from 'react';
import logo from './logo.svg';
import {Col, Row, Grid} from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>&lt;{'Col xs={12} md={8}'} /">&gt;</code>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
            </Col>
            <Col xsHidden md={4}>
              <code>&lt;{'Col xsHidden md={4}'} /">&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <code>&lt;{'Col xs={6} xsOffset={6}'} /">&gt;</code>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <code>&lt;{'Col md={6} mdPush={6}'} /">&gt;</code>
            </Col>
            <Col md={6} mdPull={6}>
              <code>&lt;{'Col md={6} mdPull={6}'} /">&gt;</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
