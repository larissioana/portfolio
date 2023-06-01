import { contactData } from "../data/data";
import styled from "styled-components";

const Contact = () => {
    return (
        <Wrapper className="contact-container" id="contact">
        {contactData.map((data) => {
            const {id, url, icon} = data;
            return <ul className="contact-links" key={id}>
                <li>
                    <a href={url} target="_blank" rel="noreferrer" >{icon}</a>
                </li>
            </ul>
        })}
        </Wrapper>
    )
};

export default Contact;

const Wrapper = styled.section`
    color: var(--clr-font);
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0rem 0rem 2rem 0rem;

    a{
        color:var(--clr-font);
        font-size:clamp(1.2rem, 2vw, 1.5rem);
        cursor:pointer;
    }
`