import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    ContentPar,
    ContentSectionTitle,
} from '../helpers/styled-components/typography';
import CodeBlock from './code-block';

const ResultsTitle = styled(ContentSectionTitle)`
    cursor: pointer;
`;

const ResultsPar = styled(ContentPar)`
    display: ${({ show }) => (show ? 'block' : 'none')};
`;

const CodeResults = ({ content, code }) => {
    const [show, setShow] = useState(false);
    useEffect(() => setShow(false), [content]);
    return (
        <>
            <ResultsTitle onClick={() => setShow(s => !s)}>
                Results <span>🧐</span>
            </ResultsTitle>
            {!code && <ResultsPar show={show}>{content}</ResultsPar>}
            {code && show && <CodeBlock code={content} />}
        </>
    );
};

export default CodeResults;
