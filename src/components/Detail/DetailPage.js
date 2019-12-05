import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { VictoryBar, VictoryAxis, VictoryChart } from "victory";

//Containers
import StockDetailContainer from "../../containers/StockDetailContainer";

//Components
import StockDetailNews from "./StockDetailNews";

const DetailPage = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Container className="d-flex justify-content-start">
            <Row>
              <Card>
                <CardHeader>
                  <h3>
                    {props.location.symbol} - {props.location.name}
                  </h3>
                </CardHeader>
                <CardBody>
                  <StockDetailContainer symbol={props.location.symbol} />
                </CardBody>
              </Card>
              <Card>
                <VictoryChart minDomain={{ x: 0 }}>
                  <VictoryBar
                    data={[
                      { x: 1, y: 2 },
                      { x: 2, y: 3 },
                      { x: 3, y: 5 },
                      { x: 4, y: 4 },
                      { x: 5, y: 6 }
                    ]}
                  />
                  <VictoryAxis
                    label="Months"
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    minDomain={{ x: 0 }}
                  />
                  <VictoryAxis
                    dependentAxis
                    label="Price"
                    tickValues={[1, 2, 3, 4, 5, 6]}
                    minDomain={{ y: 0 }}
                  />
                </VictoryChart>
              </Card>
            </Row>
          </Container>
        </Col>
        <Col>
          <StockDetailNews {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
