import React from 'react';
import SectionNavigationButton from './section-navigation-button';
import styled from 'styled-components';
import { useMediaPredicate } from 'react-media-hook';

const StyledContainer = styled.div`
    @media (max-width: 767px) {
        display: flex;
    }
`;

const SectionNavigationContainer = ({
    currentSection,
    subsectionIdx,
    prevSubSection,
    firstSection,
    dispatch,
    lastSection,
    nextSubSection,
}) => {
    const smallScreen = useMediaPredicate('(max-width: 767px)');
    return (
        <StyledContainer>
            {subsectionIdx !== 0 && (
                <SectionNavigationButton
                    tooltipcontent="back"
                    direction="up"
                    onClick={prevSubSection}
                    smallScreen={smallScreen}
                />
            )}

            {!smallScreen && !firstSection && (
                <SectionNavigationButton
                    tooltipcontent="previous section"
                    direction="left"
                    onClick={() =>
                        dispatch?.({
                            type: 'clicked previous section navigation',
                        })
                    }
                />
            )}
            {!smallScreen && currentSection?.subsections && !lastSection && (
                <SectionNavigationButton
                    tooltipcontent="next section"
                    direction="right"
                    onClick={() =>
                        dispatch?.({
                            type: 'clicked next section navigation',
                        })
                    }
                />
            )}
            {((currentSection?.subsections &&
                subsectionIdx !== currentSection?.subsections?.length - 1) ||
                false) && (
                <SectionNavigationButton
                    tooltipcontent="continue"
                    direction="down"
                    onClick={nextSubSection}
                    smallScreen={smallScreen}
                />
            )}
        </StyledContainer>
    );
};

export default SectionNavigationContainer;
