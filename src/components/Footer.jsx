import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyle>
            <p>&copy; Larisa Ioana Oltean</p>
        </FooterStyle>
    )
};

export default Footer;

const FooterStyle = styled.footer`
    color:var(--clr-font);
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:1rem;
    font-size: 1rem;
`