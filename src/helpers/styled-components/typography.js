import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
    color: var(--color-scale-0);
    text-decoration: none;
`;

export const StyledAnchor = styled.a`
    color: var(--color-scale-0);
    text-decoration: none;
`;

export const SectionTitle = styled.h1`
    color: var(--color-scale-0);
`;

export const StyledContent = styled.p`
    color: var(--color-scale-0);
`;

export const ContentPar = styled(StyledContent)`
    ${tw`
        sm:text-lg md:text-xl
    `};
`;

export const ContentSectionTitle = styled(StyledContent)`
    ${tw`
        mt-0
        underline
        text-center
        sm:text-2xl md:text-3xl
    `};
`;
