import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { StyledLink } from '../helpers/styled-components/typography';
import tw from 'tailwind.macro';

const StyledCard = animated(styled(StyledLink)`
    background-color: var(--color-scale-3-alpha-3);
    box-style: border-box;
    text-align: center;
    ${tw`sm:h-12 md:h-auto 
         w-screen md:w-1/6 
         py-12 md:p-10 
         shadow-2xl 
         text-3xl md:text-xl lg:text-2xl 
         md:rounded 
         my-3 md:mx-2 md:mb-9
    `};
`);

const Card = ({ item: { category } }) => {
    const [hover, setHover] = useState(false);
    const { x } = useSpring({
        x: hover ? 0.1 : 0,
        config: config.wobbly,
    });
    return (
        <StyledCard
            to="/lesson"
            state={{ category }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                transform: x.interpolate(x => `scale(${1 + x})`),
            }}
        >
            {category}
        </StyledCard>
    );
};

export default Card;
