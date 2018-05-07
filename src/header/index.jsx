import * as React from 'react';
import { Col } from 'react-bootstrap';
import {
    BackButton, ButtonText, Logo, Header, AppHeader
} from './styles';
import LogoImage  from '../assets/img/logo.png';

export default () => {
    return (
        <Header>
            <Col xs={3} sm={2} md={1}>
                <BackButton>
                    <ButtonText>{'< Back'}</ButtonText>
                </BackButton>
            </Col>
            <Col xs={6} sm={8} md={9}>
                <AppHeader>Hotel Details</AppHeader>
            </Col>
            <Col xs={3} sm={2} className="end-align">
                <Logo src={LogoImage}/>
            </Col>
        </Header>
    );
};