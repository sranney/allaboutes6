import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { StyledIconImportant } from '../helpers/styled-components/icons';

//fragment for positioning styles for the alert card - it will 
const positionStyles = ({ position }) =>
    position === 'relative'
        ? `bottom: 8px`
        : `top: 8px
            right: 8px`;

const StyledAlert = styled.div`
    background-color: var(--color-scale-0);
    color: var(--color-scale-8);
    ${positionStyles}
    position: ${({ placement }) =>
        placement === 'toc' ? 'relative' : 'fixed'};
    ${tw`
        text-base md:text-lg
        p-2 pl-8
        z-50
    `};
`;

const SectionScrollAlert = ({ msg, position }) => (
    <StyledAlert position={position}>
        <StyledIconImportant position={position} />
        {msg}
    </StyledAlert>
);

export default SectionScrollAlert;
