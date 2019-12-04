import styled from 'styled-components';
import RightArrow from '../assets/icon-arrow-right.svg';
import LeftArrow from '../assets/icon-arrow-left.svg';
import DownArrow from '../assets/icon-arrow-down.svg';
import UpArrow from '../assets/icon-arrow-up.svg';

export const iconStyles = `
    position: fixed;
    fill: var(--color-scale-0);
    cursor: pointer;
    z-index: 10000;
`;

export const sectionIconPositionStyles = `
    top: 50%;
    tranform: translateY(-50%);
`;

export const StyledRightArrow = styled(RightArrow)`
    ${iconStyles};
    ${sectionIconPositionStyles};
    right: 16px;
`;

export const StyledLeftArrow = styled(LeftArrow)`
    ${iconStyles};
    ${sectionIconPositionStyles};
    left: 16px;
`;

export const StyledDownArrow = styled(DownArrow)`
    ${iconStyles}
    bottom: 8px;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

export const StyledUpArrow = styled(UpArrow)`
    ${iconStyles}
    top: 32px;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;
