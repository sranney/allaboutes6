import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledBackgroundImg = styled(BackgroundImage)`
    position: static;
    z-index: -1;
`;

const BackgroundImg = ({ children, img }) => {
    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "background.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
            {children}
        </BackgroundImage>
    );
};

export default BackgroundImg;
