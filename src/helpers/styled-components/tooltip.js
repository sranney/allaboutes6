import styled from 'styled-components';

const determineBottomPosition = ({ direction }) =>
    direction === 'down' && '80px';
const determineTopPosition = ({ direction }) => {
    if (direction === 'up') {
        return '80px';
    } else if (direction === 'right' || direction === 'left') {
        return '50vh';
    }
};
const determineRightPosition = ({ direction }) =>
    direction === 'right' && '8px';
const determineLeftPosition = ({ direction }) => {
    if (direction === 'down' || direction === 'up') {
        return '50%';
    } else if (direction === 'left') {
        return '180px';
    }
};

export const Tooltip = styled.div`
    position: fixed;
    color: var(--color-scale-0);
    bottom: ${determineBottomPosition};
    top: ${determineTopPosition};
    right: ${determineRightPosition};
    left: ${determineLeftPosition};
    transform: translate3d(
        -50%,
        ${({ direction }) =>
            ((direction === 'left' || direction === 'right') && '0%') ||
            '-50%'},
        0
    );
    background: var(--color-scale-0);
    color: var(--color-scale-8);
    padding: 16px;
    font-size: 25px;
    z-index: 100;
`;
