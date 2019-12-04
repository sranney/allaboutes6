import React, { useContext, useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import PageContext from '../helpers/context/PageContext';
import {
    SectionTitle,
    StyledLink,
} from '../helpers/styled-components/typography';

import TOC from './toc';
import Section from './section';

import moduleData from '../modules/module-data';

console.log(PageContext);

const Panel = animated(styled.div`
    top: 0;
    padding: 16px;
    z-index: 100;
    box-sizing: border-box;
    ${tw`sm:static md:fixed md:h-screen`};
`);

const LeftPanel = styled(Panel)`
    left: 0;
    ${tw`sm:w-full md:w-1/4`};
    background-color: var(--color-scale-3);
`;

const RightPanel = styled(Panel)`
    left: 25%;
    background-color: var(--color-scale-8-alpha-3);
    ${tw`sm:w-full md:w-3/4`};
`;

const Lesson = ({ transitionStatus, location }) => {
    //get current module from looking at location.state.category
    const [currentMod, setCurrentMod] = useState(() =>
        moduleData?.find(mod => mod.category === location?.state?.category)
    );
    const setShow = useContext(PageContext);
    setShow(false);

    //from currentMod, if currentMod is found, put together an array of the titles for the TOC component to render
    const sections = useRef(currentMod?.sections || []);
    //from sections, initialize currentSection when this component is loaded to be the first section title
    const [currentSection, setCurrentSection] = useState(
        (sections?.current && sections?.current?.[0]) || ''
    );

    const mount = ['entering', 'entered'].includes(transitionStatus);

    const { x } = useSpring({
        x: mount ? 0 : 100,
        config: config.wobbly,
    });

    return (
        <>
            <LeftPanel
                style={{
                    transform: x.interpolate(
                        x => `translate3d(${-1 * x}%,0,0)`
                    ),
                }}
            >
                <StyledLink className="link" to="/">
                    Back to modules
                </StyledLink>
                <SectionTitle style={{ marginBottom: '16px' }}>
                    {location?.state?.category}
                </SectionTitle>
                <TOC
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    sections={sections?.current}
                />
            </LeftPanel>
            <RightPanel
                style={{
                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                }}
            >
                <Section
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    sections={sections}
                />
            </RightPanel>
        </>
    );
};

export default Lesson;
