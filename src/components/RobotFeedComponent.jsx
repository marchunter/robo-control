
import React, { Component } from 'react';
import DirectionComponent from './DirectionComponent';
import { Button, Row, Col, Container } from 'react-bootstrap';
import RobotStatusComponent from './RobotStatusComponent';
import { useContext } from 'react';
import RobotContext from './RobotContext.js';

const RobotFeedComponent = (props) => {
    const {currentStatus, setValue} = useContext(RobotContext);
    console.log("context", currentStatus);
    return (
        <div>
            <p>
                {currentStatus}
            </p>
        </div>
     );
}
 
export default RobotFeedComponent