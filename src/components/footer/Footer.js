import React from 'react'
import styled from 'styled-components'
import {FaYoutube} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {Btn} from './../utility/Button'
const FooterSection = styled.section `
    width: 100%;
    background: #000d1a;

`
const Container = styled.div `
    padding: 6rem 3rem;
`
const Grid = styled.div `   
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap:20px;
    justify-content: space-between;
    color: white;
    align-items: center;
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
    }
`
const Flex = styled.div `   
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    @media screen and (max-width:767px){
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
    }

`
const Message = styled.div `
    font-size: clamp(2rem, 1.2500rem + 3.3333vw, 3rem);
    width: 100%;

`
const Links = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    margin-bottom: 50px;
    li{
        cursor: pointer;
    }
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
    }

`
const Social = styled.div `
    display: flex;
    cursor: pointer;
    margin-bottom: 20px;

`
const Youtube = styled(FaYoutube)`
    margin-right: 10px;
    color: #cd853f;
    width: 20px;
    height: 20px;
`
const Instgram = styled(FiInstagram)`
    margin-right: 10px;
    color: #cd853f;
    width: 20px;
    height: 20px;
`
const Facebook = styled(FaFacebookF)`
    margin-right: 10px;
    color: #cd853f;
    width: 20px;
    height: 20px;
`
const Linkedin = styled(FaLinkedinIn)`
    margin-right: 10px;
    color: #cd853f;
    width: 20px;
    height: 20px;
`
function Footer() {
    return (
        <FooterSection>
            <Container>
                <Grid>
                    <Message>
                        <h2>let's find <br/> your dream home</h2>
                    </Message>
                    <Links>
                        <li>about</li>
                        <li>modern designs</li>
                        <li>newest homes</li>
                        <li>faqs</li>
                        <li>contact</li>
                        <li>interior</li>
                        
                    </Links>
                </Grid>
                <Flex>
                    <Social>
                        <Youtube/>
                        <Instgram/>
                        <Facebook/>
                        <Linkedin/>
                    </Social>
                    <Btn>view more</Btn>
                </Flex>
            </Container>
        </FooterSection>
    )
}

export default Footer
