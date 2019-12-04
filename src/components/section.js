import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import SectionContent from './section-content';
import SectionNavigation from './section-navigation';

const SectionContainer = styled.div`
    position: relative;
    bottom: 10vh;
    height: 70vh;
    top: 10vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Section = ({ currentSection, setCurrentSection, sections }) => {
    const [subsectionIdx, setSubsectionIdx] = useState(0);
    const [sectionIdx, setSectionIdx] = useState(0);
    const sectionContainerRef = useRef();
    const sectionContentRef = useRef();

    //bound the index values by 0 to the length of the array
    const prevSubSection = () => {
        setSubsectionIdx(i => (i - 1 >= 0 ? --i : i));
    };

    const nextSubSection = () =>
        setSubsectionIdx(i =>
            i + 1 < currentSection?.subsections?.length ? ++i : i
        );

    const prevSection = () => setSectionIdx(i => (i - 1 >= 0 ? --i : i));

    const nextSection = () => {
        setSectionIdx(i => (i + 1 < sections?.current?.length ? ++i : i));
    };

    useEffect(() => {
        setCurrentSection(sections?.current?.[sectionIdx]);
        setSubsectionIdx(0);
    }, [sectionIdx, sections, setCurrentSection]);

    useEffect(
        () =>
            setSectionIdx(
                sections?.current?.findIndex(
                    ({ title }) => title === currentSection.title
                )
            ),
        [currentSection]
    );

    //TODO - get content height vs container height figured out
    const sectionContainerClientHeight =
        sectionContainerRef?.current?.clientHeight || 0;
    const sectionContentContainerClientHeight =
        sectionContentRef?.current?.clientHeight || 0;
    useMemo(() => {
        console.log(sectionContainerClientHeight || 'not defined');
        console.log(sectionContentContainerClientHeight || 'not defined');
    }, [sectionContainerClientHeight, sectionContentContainerClientHeight]);

    return (
        <SectionContainer ref={sectionContainerRef}>
            {subsectionIdx !== 0 && (
                <SectionNavigation
                    tooltipcontent="back"
                    direction="up"
                    onClick={prevSubSection}
                />
            )}
            {sectionIdx !== 0 && (
                <SectionNavigation
                    tooltipcontent="previous section"
                    direction="left"
                    onClick={prevSection}
                />
            )}
            <SectionContent
                sectionContentRef={sectionContentRef}
                subsection={currentSection?.subsections?.[subsectionIdx]}
            />
            {(sectionIdx !== sections?.current?.length - 1 || false) && (
                <SectionNavigation
                    tooltipcontent="next section"
                    direction="right"
                    onClick={nextSection}
                />
            )}
            {(subsectionIdx !== currentSection?.subsections?.length - 1 ||
                false) && (
                <SectionNavigation
                    tooltipcontent="continue"
                    direction="down"
                    onClick={nextSubSection}
                />
            )}
        </SectionContainer>
    );
};

export default Section;
