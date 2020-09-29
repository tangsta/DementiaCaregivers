import React from 'react';

import styled from 'styled-components'

//bootstrap 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// css

import '../css/main.css'; 
import '../css/article.css'; 

function Article( {props} ) {
    return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pic} />
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text> {props.disc} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
}


export default Article;

