import styled from "styled-components";

const Logo = styled.img`
    position: absolute;
    right: 0;
    height: 35px;
    width: 35px;
    top: 12px;
    right: 12px;
    border-radius: 4px;
`;

const ButtonText = styled.span`
    color: #ffffff;
    position: relative;
    top: -2px;
    font-size: 1.5em;
`;

const BackButton = styled.button`
    background: #45484d; /* Old browsers */
    background: -moz-linear-gradient(top,  #45484d 0%, #000000 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #45484d 0%,#000000 100%); /* Chrome10-25,Safari5.1-6 */
    border:  none;
    color: #ffffff;
    float: left;
    position: absolute;
    top: 14px;
    padding: 7px;
    left: 15px;
    border-radius: 4px;
`;

const Header = styled.div`
    height: 60px;
    background-color: #1c1c1c;
    color: #ffffff;
    position: relative;
    font-weight: bold;
    border-bottom: 1px solid #30373d;
`;

const AppHeader = styled.div`
    text-align: center;
    font-size: 1.5rem;
    line-height: 60px;
    width: 100%;
    margin: 0;
`;

export {
    Logo,
    ButtonText,
    BackButton,
    Header,
    AppHeader
};