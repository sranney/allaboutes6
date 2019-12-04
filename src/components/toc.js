//table of contents component
import React, { useMemo } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledTOC = styled.ul`
    margin-left: 0;
    padding-left: 0;
    height: 50%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledListItem = styled.li`
    padding: 16px 0 16px 48px;
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
    ${tw`text-xl relative cursor-pointer list-none`};
`;

const TOC = ({
    setCurrentSection,
    sections,
    currentSection: { title: currentTitle },
}) => {
    const titles = useMemo(() => sections?.map(({ title }) => title) || [], [
        sections,
    ]);
    return (
        <StyledTOC>
            {titles?.map((title, idx) => (
                <StyledListItem
                    onClick={() => setCurrentSection?.(sections?.[idx])}
                    key={title}
                    current={currentTitle === title}
                >
                    {title}
                </StyledListItem>
            ))}
        </StyledTOC>
    );
};

export default TOC;
