import styled from 'styled-components';

interface TitleProps {
    readonly isActive: boolean;
}

export const NavigationWrapper = styled.ul`
    padding: 2rem;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li<TitleProps>`
    padding: 1rem 0;
    a {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        color: ${({ isActive, theme }) => (isActive ? theme.colors.textPrimary : theme.colors.textSecondary)};

        .line {
            height: 1px;
            background: ${({ theme }) => theme.colors.textPrimary};
            display: inline-block;
            margin: auto;
            transition: all 0.5s;
            width: ${({ isActive }) => (isActive ? '100px' : '50px')};
        }
    }
`;
