import "./MainContent.css";

import React from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

const MainContent = () => {
  return (
    <div className="main-content">
      <Container fluid>
        <Col xs={12} className="pt-4">
          <div className="mt-5 py-3 px-5 bg-white shadow-sm rounded-3">
            <Breadcrumb
              style={{ "--bs-breadcrumb-divider": "'>'" }}
              aria-label="breadcrumb"
            >
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Statistics</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>

        <Row>
          <Col lg={3} className="py-3">
            <div className="bg-white shadow-sm rounded-3 d-flex justify-content-between p-4">
              <div>
                <p className="small">Customers</p>
                <p className="fs-3 fw-bold">25,544</p>
                <p className="mb-0">
                  <span className="text-danger">
                    <ArrowDown /> 2.21%
                  </span>{" "}
                  Since last month
                </p>
              </div>
              {/* Replace with the appropriate FontAwesome icon */}
              <i className="fas fa-user-check fa-2x stats"></i>
            </div>
          </Col>

          <Col lg={3} className="py-3">
            <div className="bg-white shadow-sm rounded-3 d-flex justify-content-between p-4">
              <div>
                <p className="small">Orders</p>
                <p className="fs-3 fw-bold">1.544</p>
                <p className="mb-0">
                  <span className="text-success">
                    <ArrowUp /> 4.51%
                  </span>{" "}
                  Since last month
                </p>
              </div>
              {/* Replace with the appropriate FontAwesome icon */}
              <i className="fas fa-cart-plus fa-2x stats"></i>
            </div>
          </Col>

          <Col lg={3} className="py-3">
            <div className="bg-white shadow-sm rounded-3 d-flex justify-content-between p-4">
              <div>
                <p className="small">Revenue</p>
                <p className="fs-3 fw-bold">3,542$</p>
                <p className="mb-0">
                  <span className="text-success">
                    <ArrowUp /> 2.21%
                  </span>{" "}
                  Since last month
                </p>
              </div>
              {/* Replace with the appropriate FontAwesome icon */}
              <i className="fas fa-dollar-sign fa-2x stats"></i>
            </div>
          </Col>

          <Col lg={3} className="py-3">
            <div className="bg-white shadow-sm rounded-3 d-flex justify-content-between p-4">
              <div>
                <p className="small">Growth</p>
                <p className="fs-3 fw-bold">14.25%</p>
                <p className="mb-0">
                  <span className="text-success">
                    <ArrowUp /> 1.51%
                  </span>{" "}
                  Since last month
                </p>
              </div>
              {/* Replace with the appropriate FontAwesome icon */}
              <i className="fas fa-chart-bar fa-2x stats"></i>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={7} className="py-3">
            <div className="bg-white shadow-sm rounded-3 p-4">
              {/* Replace with your chart component */}
              <canvas id="myChart1" height="208"></canvas>
            </div>
          </Col>
          <Col lg={5} className="py-3">
            <div className="bg-white shadow-sm rounded-3 p-4">
              {/* Replace with your chart component */}
              <canvas id="myChart2" height=""></canvas>
            </div>
          </Col>
          <Col xs={12} className="py-3">
            <div className="bg-white shadow-sm rounded-3 p-4">
              {/* Replace with your chart component */}
              <canvas id="myChart3" height="100"></canvas>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
