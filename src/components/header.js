import { StyledLink } from '../helpers/styled-components/typography';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledHeader = styled.header`
    background-color: transparent;
    ${tw`m-6 mt-0 text-center md:text-left`};
`;
const SiteTitleContainer = styled.div`
    ${tw`mx-auto max-w-full px-5 pt-4 pb-6`};
`;

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <SiteTitleContainer>
            <h1 style={{ margin: 0 }}>
                <StyledLink to="/">{siteTitle}</StyledLink>
            </h1>
        </SiteTitleContainer>
    </StyledHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
