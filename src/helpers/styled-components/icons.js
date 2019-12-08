import styled from 'styled-components';
import tw from 'tailwind.macro';

import RightArrow from '../assets/icon-arrow-right.svg';
import LeftArrow from '../assets/icon-arrow-left.svg';
import DownArrow from '../assets/icon-arrow-down.svg';
import UpArrow from '../assets/icon-arrow-up.svg';
import IconImportant from '../assets/icon-important.svg';

//additional styles for navigation icons
const iconStyles = `
    position: fixed;
    fill: var(--color-scale-0);
    z-index: 10000;
    @media (max-width: 767px) {
        position: static;
    }
    ${tw`
        cursor-pointer
    `};
`;

//the right and left arrows change sections - want those to be in the vertical middle of the page on either side
const sectionIconPositionStyles = `
    top: 50%;
    tranform: translateY(-50%);
`;

//the top and bottom arrows change subsections - want those to be place at the top and bottom and in the horizontal middle of the page on either side
const subSectionIconPositionStyles = `
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    @media (max-width: 767px) {
        left: 0;
        transform: scale(0.8);
    }
`;

//Navigation Buttons
//Next Section
export const StyledRightArrow = styled(RightArrow)`
    ${iconStyles};
    ${sectionIconPositionStyles};
    right: 16px;
`;
//Previous Section
export const StyledLeftArrow = styled(LeftArrow)`
    ${iconStyles};
    ${sectionIconPositionStyles};
    left: 16px;
`;
//Next SubSection
export const StyledDownArrow = styled(DownArrow)`
    ${iconStyles}
    bottom: 8px;
    ${subSectionIconPositionStyles}
`;
//Previous SubSection
export const StyledUpArrow = styled(UpArrow)`
    ${iconStyles}
    top: 32px;
    ${subSectionIconPositionStyles}
`;

//Alert Icon
export const StyledIconImportant = styled(IconImportant)`
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    .primary {
        fill: var(--color-scale-8);
    }
    .secondary {
        fill: var(--color-scale-0);
    }
    ${tw`
        mr-4
        absolute
    `};
`;
