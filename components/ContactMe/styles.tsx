import styled from 'styled-components';

export const ContactMeSection = styled.section`
    label {
        display: block;
    }

    h3 {
        a {
            font-style: italic;
        }
    }

    input,
    textarea {
        border: none;
        outline: none;
        padding: 0.5rem;
        width: 100%;
        margin: 1rem 0;
        resize: vertical;
        font-size: 1.6rem;
        box-sizing: border-box;
    }

    button {
        background: #fff;
        border: none;
        outline: none;
        padding: 0.5rem 2rem;
        font-weight: bold;
        display: block;
        margin-left: auto;
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        margin: 2rem 0;
        padding: 0;
    }
`;
