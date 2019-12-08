import React, { useReducer, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useMediaPredicate } from 'react-media-hook';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import {
    SectionTitle,
    StyledLink,
} from '../helpers/styled-components/typography';

import TOC from './toc';
import Section from './section';

import useFetchData from '../helpers/hooks/useFetchData';

const ModTitle = styled.h3`
    color: var(--color-scale-0);
    ${tw`
        mb-4
        sm:text-4xl md:text-3xl xl:text-5xl
    `};
`;

const Panel = animated(styled.div`
    box-sizing: border-box;
    ${tw`
        p-4
        sm:static 
        md:top-0
        md:z-20
        md:fixed 
        md:h-screen
    `};
`);

const LeftPanel = styled(Panel)`
    ${tw`
        sm:w-full md:w-1/3 lg:w-1/4
        left-0
    `};
    background-color: var(--color-scale-3);
`;

const RightPanel = styled(Panel)`
    left: ${({ lessThanLargeWidth }) =>
        lessThanLargeWidth ? '33.333%' : '25%'};
    background-color: var(--color-scale-8-alpha-3);
    ${tw`
        sm:w-full md:w-2/3 lg:w-3/4
    `};
`;

const getSectionIdx = ({
    currentMod: { sections },
    currentSection: { title },
}) => {
    return {
        currentSectionIdx: sections.findIndex(
            ({ title: sectionTitle }) => sectionTitle === title
        ),
        sections,
    };
};

const reducer = (state, action) => {
    if (action?.type === 'view module') {
        return {
            currentMod: action?.payload,
            currentSection: action?.payload?.sections?.[0] || {},
            firstSection: true,
            lastSection: false,
        };
    } else if (action?.type === 'section clicked') {
        const numSections = state?.currentMod?.sections.length;
        return {
            ...state,
            currentSection:
                state?.currentMod?.sections?.[action?.payload] || {},
            firstSection: action?.payload === 0,
            lastSection: action?.payload === numSections - 1,
        };
    } else if (action?.type === 'clicked previous section navigation') {
        const { currentSectionIdx, sections } = getSectionIdx(state);
        const newSectionIdx =
            currentSectionIdx && currentSectionIdx - 1 >= 0
                ? currentSectionIdx - 1
                : currentSectionIdx;
        return {
            ...state,
            currentSection: sections?.[newSectionIdx] || {},
            firstSection: newSectionIdx === 0,
            lastSection: sections?.length - 1 === newSectionIdx,
        };
    } else if (action?.type === 'clicked next section navigation') {
        const { currentSectionIdx, sections } = getSectionIdx(state);
        const newSectionIdx =
            currentSectionIdx + 1 < sections?.length
                ? currentSectionIdx + 1
                : currentSectionIdx;
        console.log('current section idx: ', currentSectionIdx);
        console.log('sections: ', sections);
        console.log('new section idx: ', newSectionIdx);
        return {
            ...state,
            currentSection: sections?.[newSectionIdx] || {},
            firstSection: newSectionIdx === 0,
            lastSection: sections?.length - 1 === newSectionIdx,
        };
    }
    return state;
};

const Lesson = ({ transitionStatus, location }) => {
    const lessThanLargeWidth = useMediaPredicate('(max-width:1023px)');
    const [moduleData, error, loading] = useFetchData(
        `mod/${location.state.category}`
    );

    const [
        { currentMod, currentSection, firstSection, lastSection },
        dispatch,
    ] = useReducer(reducer, {
        currentMod: {}, //current topic whose lessons are being displayed on page
        currentSection: {}, //current section for currentMod
        firstSection: true, //flag for section navigation - is the first section being shown?
        lastSection: false, //flag for section navigation - is the last section being shown?
    });

    //when the data comes back from the API, use it to set up the data consumed by the children components of Lesson
    useEffect(() => dispatch({ type: 'view module', payload: moduleData }), [
        moduleData,
    ]);

    //for animation. transitionStatus is a string whose value changes depending on the animation 'lifecycle' of the component
    const mount = ['entering', 'entered'].includes(transitionStatus);

    //react-spring animation for component entering - x is interpolated from 0 to 100 to do an animation on translate
    const { x } = useSpring({
        x: mount ? 0 : 100,
        config: config.wobbly,
    });

    return (
        <>
            <LeftPanel
                style={{
                    transform: x.interpolate(x => `translateX(${-1 * x}%)`),
                }}
            >
                <StyledLink className="link" to="/">
                    Back to modules
                </StyledLink>
                <ModTitle>{location?.state?.category}</ModTitle>
                <TOC
                    currentSection={currentSection}
                    dispatch={dispatch}
                    sections={currentMod?.sections}
                />
            </LeftPanel>
            <RightPanel
                lessThanLargeWidth={lessThanLargeWidth}
                style={{
                    transform: x.interpolate(x => `translateX(${x}%)`),
                }}
            >
                <Section
                    currentSection={currentSection}
                    dispatch={dispatch}
                    firstSection={firstSection}
                    lastSection={lastSection}
                />
            </RightPanel>
        </>
    );
    return <div>Hello</div>;
};

export default Lesson;
