import React, { Component } from 'react';
import DirectionComponent from './DirectionComponent';
import { Button, Row, Col, Container } from 'react-bootstrap';

const ControlComponent = (props) => {
    return (
        <Container>
            <Row className="justify-content-xs-center">
                <Col xs="auto">
                    <Container fluid>

                    <Row className="justify-content-xs-center">
                        <Col xs={12}>
                        <DirectionComponent symbol = "^" />
                        </Col>
                    </Row>
                    <Row className="justify-content-xs-center">

                        <Col xs={12}>
                   <DirectionComponent symbol = "<" />
                    <DirectionComponent symbol = "O" />
                    <DirectionComponent symbol = ">" />
                        </Col>
                    </Row>
 
                    <Row className="justify-content-xs-center">
                        <Col xs={12}>
                        <DirectionComponent symbol = "v" />
                        </Col>
                    </Row>      
                    </Container>

                </Col>
                <Col xs="auto">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default ControlComponent;

