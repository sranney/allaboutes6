import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import tw from 'tailwind.macro';
import GridLoader from '@bit/davidhu2000.react-spinners.grid-loader';

import Card from './card';

import useFetchData from '../helpers/hooks/useFetchData';

const StyledContainer = styled.div`
    min-height: 70vh;
    ${tw`w-full flex flex-wrap md:justify-around`};
`;
const AnimatedCard = animated(Card);

const CardContainer = () => {
    const [modules, error, loading] = useFetchData('modlist');

    //todo: get animations working
    // const transition = useTransition(modules || [], mod => mod, {
    //     trail: 1400,
    //     from: { opacity: 0, transform: 'scale(0)' },
    //     enter: { opacity: 1, transform: 'scale(1)' },
    //     leave: { opacity: 0, transform: 'scale(0)' },
    //     config: config.wobbly,
    // });

    return (
        <StyledContainer>
            {modules?.length === 0 ? (
                <GridLoader
                    size={60}
                    color="var(--color-scale-5)"
                    margin="15px"
                />
            ) : (
                modules?.map(mod => <AnimatedCard key={mod} item={mod} />)
            )}
        </StyledContainer>
    );
};

export default CardContainer;
