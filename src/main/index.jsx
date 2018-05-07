import * as React from 'react';
import { Row, Col, Accordion, Panel } from 'react-bootstrap';
import {
    Container, HotelName, Content,
    Address, PhoneNumber, HotelImage
} from './styles';
import Header from '../header';
import './main.css';

export default () => {
    return (
        <Container>
            <Header />
            <Content>
                <HotelImage />
                <Row>
                    <Col xs={10} xsOffset={1} className="color white">
                        <HotelName>Hilton Chicago</HotelName>
                        <Address>
                            720, South Michigan Avenue
                            <br/>
                            Chicago, Illinois, 60605
                        </Address>
                        <PhoneNumber>1-312-922-4400</PhoneNumber>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <Accordion id="accordion-controlled-example">
                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>Map</Panel.Title>
                                </Panel.Heading>
                                <Panel.Heading>
                                    <Panel.Title toggle>Photo Gallery</Panel.Title>
                                </Panel.Heading>
                                <Panel.Heading>
                                    <Panel.Title toggle>Amenities</Panel.Title>
                                </Panel.Heading>
                            </Panel>
                        </Accordion>
                    </Col>
                </Row>
            </Content>
        </Container>
    );
}
