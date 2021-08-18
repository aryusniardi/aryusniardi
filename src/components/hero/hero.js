import React, {useState} from 'react'
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    HeroButtonWrapper,
    HeroButtonText,
    Arrow,
    ArrowDown
} from './hero.elements'
import { Button } from '../button.elements'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>I AM</HeroH1>
                <HeroP>Informatics Engineer Student</HeroP>
            </HeroContent>
            <HeroButtonWrapper>
                <HeroButtonText>
                    Get to know me more
                </HeroButtonText>
                <Button 
                    to="" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    {hover ? <Arrow /> : <ArrowDown />}
                </Button>
            </HeroButtonWrapper>
        </HeroContainer>
    )
}

export default Hero