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
    @media (max-width: 767px) {
        margin-right: 8px;
        height: auto;
        position: static;
        display: inline-block;
    }
`;

const SectionNavigationButton = ({
    tooltipcontent,
    direction,
    onClick,
    smallScreen,
}) => {
    const [hover, setHover] = useState(false);
    return (
        <SectionMenu
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!smallScreen && hover && (
                <Tooltip direction={direction}>{tooltipcontent}</Tooltip>
            )}
            {direction === 'up' && <StyledUpArrow onClick={onClick} />}
            {direction === 'down' && <StyledDownArrow onClick={onClick} />}
            {direction === 'left' && <StyledLeftArrow onClick={onClick} />}
            {direction === 'right' && <StyledRightArrow onClick={onClick} />}
        </SectionMenu>
    );
};

export default SectionNavigationButton;
