import styled from 'styled-components';

export const RectangleCardWrapper = styled.a`
    display: block;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 2rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .tags {
        display: flex;
        gap: 1rem;
    }

    h1 {
        line-height: 0.5;
        font-weight: normal;
    }

    .desc {
        font-weight: lighter;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 768px) {
        &:hover {
            transform: none;
        }
    }
`;