import styled from 'styled-components';

interface RectangleCardWrapperProps {
    fade: boolean;
}

export const RectangleCardWrapper = styled.div<RectangleCardWrapperProps>`
    display: block;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 3rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: ${({ fade }) => fade && 0.5};

    .tags {
        display: flex;
        gap: 1rem;
    }

    h1 {
        line-height: 1;
        margin: 1.5rem auto;
        font-weight: normal;
    }

    .desc {
        font-weight: lighter;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 768px) {
        padding: 2rem 3rem;

        &:hover {
            transform: none;
        }
    }
`;
