import styled from "styled-components";
import backgroundImage from '../assets/img/background.png';
import HotelExterior from '../assets/img/hotelexterior.jpg';

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    background-image: url(${backgroundImage});
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    overflow: auto;
`;

const Content = styled.div`
    padding: 20px;
    height: calc(100% - 70px);
`;

const HotelName = styled.span`
    font-size: 1.4rem;
    line-height: 1.8em;
`;

const Address = styled.p`
    padding-bottom: 10px;
    line-height: 26px;
    color: #ADD8E6;
`;

const PhoneNumber = styled.p`
    margin-bottom: 20px;
    text-decoration: underline;
`;

const HotelImage = styled.div`
    background-image: url(${HotelExterior});
    width: 100%;
    min-height: 150px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid #ffffff;
    margin-bottom: 20px;
`;

export {
    Content,
    HotelName,
    Container,
    Address,
    PhoneNumber,
    HotelImage
};