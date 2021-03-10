import React from 'react'
import styled from 'styled-components'
const Newhomeswrapper = styled.section `
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`
const Container = styled.div `
    padding: 3rem 3rem;

`
const Grid = styled.div `

    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
    }   
`
const ColLeft = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    p{
        margin-top: 20px;
    }
`
const ColRight = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    margin-top: 150px;
    @media screen and (max-width:767px){
        margin-top: 50px;
    }
    p{
        margin-top: 20px;
    }
`

function Newhomes({NewHomesData}) {
    return (
        <Newhomeswrapper id="Homes">
            {NewHomesData.map((item,index)=> {
                return(
                    <Container>
                        <h2>{item.heading}</h2>
                        <Grid>
                            <ColLeft>
                                <img src={item.image1} alt="home" />
                                <p>{item.pOne}</p>
                            </ColLeft>
                            <ColRight>
                                <img src={item.image1} alt="home" />
                                <p>{item.pTwo}</p>
                            </ColRight>
                        </Grid>
                    </Container>
                )
            })}
        </Newhomeswrapper>
    )
}

export default Newhomes
