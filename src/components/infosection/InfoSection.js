import React from 'react'
import styled from 'styled-components'
import {Btn} from '../utility/Button'


const Section = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`
const Container = styled.div `
    padding: 3rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
    }
`
const ColLeft = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    h2{
        margin-bottom: 20px;

    }
    p{
        margin-bottom: 20px;
    }
`
const ColRight = styled.div `
    padding: 1rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const InfoSection = ({infodataone}) => {
    return (
        <Section id="About">
            
                {infodataone.map((item,index) => {
                    return( 
                        <Container key={index}>
                            <ColLeft>
                                <h2>{item.heading}</h2>
                                <p>{item.pOne}</p>
                                <p>{item.pTwo}</p>
                                <Btn primary ="true"  to="/homes">{item.label}</Btn>
                            </ColLeft>
                            <ColRight reverse={item.reverse}>
                                <img src={item.image} alt="home" />
                            </ColRight>
                        </Container>
                    )
                })}
        </Section>
    )
}

export default InfoSection
