import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const StyledEditor = styled(Editor)`
    font-size: 24px;
    padding: 0 16px;
    color: var(--color-scale-8);
    margin-bottom: 24px;
    background-color: var(--color-scale-0-alpha-3);
    maxheight: 50vh;
    outline: none;
    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

const CodeBlock = ({ code }) => {
    const [codeBlock, setCodeBlock] = useState('');
    useEffect(() => setCodeBlock(code), [code]);
    return (
        <StyledEditor
            value={codeBlock}
            onValueChange={code => setCodeBlock(code)}
            highlight={code => highlight(code, languages.js)}
            padding={24}
        />
    );
};

export default CodeBlock;
