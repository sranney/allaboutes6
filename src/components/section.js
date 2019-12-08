import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import SectionContent from './section-content';
import SectionNavigationContainer from './section-navigation-container';
import SectionScrollAlert from './section-scroll-alert';

const SectionContainer = styled.div`
    position: relative;
    bottom: 10vh;
    height: 70vh;
    top: 10vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 767px) {
        top: 2vh;
        height: 50vh;
        overflow-y: auto;
        padding-bottom: 24px;
    }
`;

const Section = ({ currentSection, ...navigationData }) => {
    const [subsectionIdx, setSubsectionIdx] = useState(0);
    const prevSubSection = () => setSubsectionIdx(i => (i - 1 >= 0 ? --i : i));
    const nextSubSection = () =>
        setSubsectionIdx(i =>
            i + 1 < currentSection?.subsections?.length ? ++i : i
        );

    const ContainerRef = useRef();

    const [bottomChildRef, bottomInView] = useInView({
        root: ContainerRef.current,
        threshold: 1,
    });

    useEffect(() => setSubsectionIdx(0), [currentSection]);

    return (
        <SectionContainer ref={ContainerRef}>
            {!bottomInView && (
                <SectionScrollAlert
                    msg="Scroll for more content"
                    placement="section-content"
                />
            )}
            <SectionNavigationContainer
                {...navigationData}
                currentSection={currentSection}
                subsectionIdx={subsectionIdx}
                prevSubSection={prevSubSection}
                nextSubSection={nextSubSection}
            />
            <SectionContent
                subsection={currentSection?.subsections?.[subsectionIdx]}
                bottomChildRef={bottomChildRef}
            />
        </SectionContainer>
    );
};

export default Section;
