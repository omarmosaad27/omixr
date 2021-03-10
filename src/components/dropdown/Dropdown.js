import React from 'react'
import styled from 'styled-components'
import {menuData} from '../../data/menudata'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Btn} from './../utility/Button'
import {Link} from 'react-router-dom'
const DropdownContainer = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #cd853f;
    transition: all 0.3s ease-in-out;
    display: grid;
    align-items: center;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top:  ${({isOpen}) => (isOpen ? '0' : '-100%')};

`
const Icon = styled.div `
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 1000;
    cursor: pointer;
`
const CloseIcon = styled(AiOutlineCloseCircle) `
    color: white;
    width: 30px;
    height: 30px;
    transition: all 0.3s ease-in-out;
    
    color:white;
    &:hover{
        color: #000d1a;
    }
`
const MenuWrapper = styled.div `
    
`
const DropdownMenu = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    align-items: center;
    text-align: center;
    margin-bottom: 4rem;
`
const DropdownLink = styled(Link) `
    display: flex;
    color: white;
    align-items: center;
    text-align:center;
    justify-content: center;
    padding-bottom: 5px;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    &:hover{
        color: #000d1a;
        
        
    }
`
const BtnWrapper = styled.a `
    display: flex;
    justify-content: center;

`
function Dropdown({isOpen,toggle}) {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <DropdownMenu>
                    {menuData.map((item,index)=>(
                        <DropdownLink to={item.link} key={index}>{item.title}</DropdownLink>
                        ))}
                </DropdownMenu>
                <BtnWrapper>
                    <Btn round="true" primary="true" to="/contact">contact us</Btn>
                </BtnWrapper>
            </MenuWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
