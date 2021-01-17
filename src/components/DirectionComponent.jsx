import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import RobotContext from './RobotContext';
import { useContext } from 'react';


const DirectionComponent = (props) => {
    const {currentStatus,setValue} = useContext(RobotContext);
    return ( <Button onClick={() => setValue(props.symbol) }>
        {props.symbol}
    </Button> );
}
 
export default DirectionComponent;

