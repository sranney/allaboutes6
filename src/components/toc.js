//table of contents component
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useInView } from 'react-intersection-observer';
import GridLoader from '@bit/davidhu2000.react-spinners.grid-loader';

import SectionScrollAlert from './section-scroll-alert';

const StyledTOC = styled.ul`
    max-height: 80%;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 767px) {
        height: 25vh;
    }
    ${tw`
        ml-0
        pl-0
        overflow-y-scroll
    `};
`;

const StyledListItem = styled.li`
    &::before {
        content: '🚀';
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
    }
    font-weight: ${({ current }) => (current ? 'bold' : 'normal')};
    color: ${({ current }) =>
        current ? 'var(--color-scale-7)' : 'var(--color-scale-0)'};
    background-image: linear-gradient(
        to right,
        transparent 0%,
        transparent 50%,
        var(--color-scale-0) 50%
    );
    background-size: 220%;
    background-position: ${({ current }) => (current ? '100%' : '0%')};
    transition: font-weight 0.3s, color 0.3s, background-position 0.3s;
    ${tw`
        py-4 pl-12
        text-lg
        lg:text-xl
        relative 
        cursor-pointer 
        list-none
    `};
`;

const TOC = ({ dispatch, sections, currentSection, smallScreen }) => {
    //get section titles for table of contents
    const [titles, setTitles] = useState(
        () => sections?.map(section => section.title) || []
    );
    useEffect(() => setTitles(sections?.map(section => section.title)), [
        sections,
    ]);
    const containerRef = useRef();
    const [ref, inView] = useInView({
        root: containerRef.current,
        threshold: 0.5,
    });

    return (
        <>
            <StyledTOC ref={containerRef}>
                {titles?.length === 0 ? (
                    <GridLoader
                        size={30}
                        color="var(--color-scale-0)"
                        margin="15px"
                    />
                ) : (
                    titles?.map((title, idx, arr) => (
                        <StyledListItem
                            onClick={() =>
                                dispatch?.({
                                    type: 'section clicked',
                                    payload: idx,
                                })
                            }
                            key={title}
                            current={currentSection.title === title}
                            ref={arr.length - 1 === idx ? ref : null}
                        >
                            {title}
                        </StyledListItem>
                    ))
                )}
            </StyledTOC>
            {!inView && (
                <SectionScrollAlert
                    msg="Scroll for more sections"
                    placement="toc"
                />
            )}
        </>
    );
};

export default TOC;
