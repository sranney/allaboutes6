import React from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import tw from 'tailwind.macro';

import Card from './card';

const StyledContainer = styled.div`
    min-height: 70vh;
    ${tw`w-full flex flex-wrap md:justify-around`};
`;
const AnimatedCard = animated(Card);

const modules = [
    { category: 'background' },
    { category: 'destructuring' },
    { category: 'resources' },
    { category: 'iterables' },
    { category: 'maps, sets' },
    { category: 'template literals' },
    { category: 'arrays' },
    { category: 'strings' },
    { category: 'numbers' },
    { category: 'generators' },
    { category: 'variables' },
    { category: 'arrow functions' },
    { category: 'classes' },
    { category: 'modules' },
];

const CardContainer = () => {
    const transition = useTransition(modules, mod => mod.category, {
        trail: 1400,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
        config: config.wobbly,
    });
    return (
        <StyledContainer>
            {transition?.map(({ item, key, props: style }) => (
                <AnimatedCard key={key} item={item} style={style} />
            ))}
        </StyledContainer>
    );
};

export default CardContainer;
