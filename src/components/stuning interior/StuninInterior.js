import React from 'react'
import styled from 'styled-components'
import {Btn} from './../utility/Button'
const StuningInterior = styled.section `
    background: #000d1a;
    width: 100%;
`

const Grid = styled.div `
    
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap:20;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width:767px){
        grid-template-columns: 1fr  ;
    }
`
const LeftCol = styled.div `
    background: white;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    padding: 2rem 3rem;
    h2{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 10px;
    }

`
const RightCol = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

function StuninInterior({InteriorData}) {
    return (
        <StuningInterior>
            {InteriorData.map((item,index)=>{
                return(
                    
                        <Grid>
                            <LeftCol>
                                <h2>{item.heading}</h2>
                                <p>{item.pOne}</p>
                                <p>{item.pTwo}</p>
                                <Btn >{item.label}</Btn>
                            </LeftCol>
                            <RightCol>
                                <img src={item.image} alt="interior"/>
                            </RightCol>
                        </Grid>
                    
                )
            })}
        </StuningInterior>
    )
}

export default StuninInterior
