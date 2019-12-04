import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import CodeBlock from './code-block';
import CodeResults from './code-results';
import {
    StyledContent,
    ContentPar,
    ContentSectionTitle,
} from '../helpers/styled-components/typography';

const Keyword = styled(StyledContent)`
    ${tw`
        italic
        sm:text-xl md:text-2xl
    `};
`;

const Example = styled(StyledContent)`
    ${tw`
        text-center
        sm:text-xl md:text-2xl
        whitespace-pre-wrap
    `};
`;

const StyledContainer = styled.div`
    ${tw`
        w-3/4
        mx-auto
        h-auto
    `};
`;

const StyledImage = styled.img`
    position: fixed;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SectionContent = ({ subsection, sectionContentRef }) => {
    return (
        <StyledContainer ref={sectionContentRef}>
            {subsection?.map(({ content, key, type }, idx) => {
                if (type === 'paragraph') {
                    return <ContentPar key={key}>{content}</ContentPar>;
                } else if (type === 'code results') {
                    return <CodeResults content={content} key={key} />;
                } else if (type === 'code results code') {
                    return <CodeResults content={content} code key={key} />;
                } else if (type === 'section title') {
                    return (
                        <ContentSectionTitle key={key}>
                            {content}
                        </ContentSectionTitle>
                    );
                } else if (type === 'keyword') {
                    return <Keyword key={key}>{content}</Keyword>;
                } else if (type === 'keyword paragraph') {
                    return (
                        <ContentPar key={key}>
                            <span>📢</span> {content}
                        </ContentPar>
                    );
                } else if (type === 'basic example') {
                    return <Example key={key}>{content}</Example>;
                } else if (type === 'code') {
                    return <CodeBlock code={content} key={key} />;
                } else if (type === 'image') {
                    return <StyledImage src={content} key={key} />;
                } else {
                    return <></>;
                }
            })}
        </StyledContainer>
    );
};

export default SectionContent;
