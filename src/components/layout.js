/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Header from './header';
import GlobalStyle from './global';
import BackgroundImg from './background-image';

import { StyledAnchor } from '../helpers/styled-components/typography';

const StyledMain = styled.main`
    min-height: 70vh;
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1600px;
    ${tw`sm:p-0 md:p-4`};
`;
const Footer = styled.footer`
    text-align: center;
    color: var(--color-scale-0);
`;

const Layout = ({ children, location, show = true }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <BackgroundImg>
            <div style={{ minHeight: '100vh' }}>
                <GlobalStyle />
                {show && <Header siteTitle={data.site.siteMetadata.title} />}
                <Container>
                    <StyledMain>{children}</StyledMain>
                    {show && (
                        <Footer>
                            © {new Date().getFullYear()}, Built by
                            {` `}
                            <StyledAnchor
                                style={{ fontWeight: 'bold' }}
                                href="https://spencerranney.com"
                            >
                                Spencer Ranney
                            </StyledAnchor>
                        </Footer>
                    )}
                </Container>
            </div>
        </BackgroundImg>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
