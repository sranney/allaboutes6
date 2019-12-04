import React, { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../helpers/styled-components/tooltip';
import {
    StyledRightArrow,
    StyledLeftArrow,
    StyledDownArrow,
    StyledUpArrow,
} from '../helpers/styled-components/icons';

const SectionMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 80vh;
    &::after {
        content: ${({ tooltipcontent }) => tooltipcontent};
        z-index: 1000;
        position: absolute;
    }
`;

const SectionNavigation = ({ tooltipcontent, direction, onClick }) => {
    const [hover, setHover] = useState(false);
    return (
        <SectionMenu
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && <Tooltip direction={direction}>{tooltipcontent}</Tooltip>}
            {direction === 'up' && <StyledUpArrow onClick={onClick} />}
            {direction === 'down' && <StyledDownArrow onClick={onClick} />}
            {direction === 'left' && <StyledLeftArrow onClick={onClick} />}
            {direction === 'right' && <StyledRightArrow onClick={onClick} />}
        </SectionMenu>
    );
};

export default SectionNavigation;
