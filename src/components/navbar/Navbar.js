import React,{useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {menuData} from '../../data/menudata'
import {Btn} from '../utility/Button'
import Bars from '../../images/iconfinder_menu-alt-2_7124120.svg'
import {FaBars} from 'react-icons/fa'
const Nav = styled.div`
    height:60px;
    z-index:1000;
    display:flex;
    justify-content:space-between;
    padding:3rem 3rem;
    position:fixed;
    width:100%;
    align-items:center;
    &.active{
        background: #000d1a;
    }
`;
const Logo = styled(NavLink)`
    color:white;
    font-style:italic;
    font-weight:bold;
    letter-spacing:2px;
    font-size:1.5rem;
    display:flex;
    align-items:center;
`;

const Navmenu = styled.ul`
    display:flex;
    align-items:center;
    @media  screen and (max-width:768px){
        display:none;
    }
`;
const NavMenuLinks =styled.li`
    color:white;
    padding:0 10px;
    padding-bottom: 5px;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid #000d1a;
    }
`;
const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-left:20px;
    @media  screen and (max-width:768px){
        display:none;
    }
`
const MenuBars = styled(FaBars) `
    display:none;
    background-image:url(${Bars});
    background-size:contain;
    width:30px;
    height:30px;
    cursor:pointer;
    position:absolute;
    top:30px;
    right:40px;
    transform:translate(-50%,25%);
    transition: all 0.3s ease-in-out;
    @media  screen and (max-width:768px){
        display:block;
    }
    color:white;
    &:hover{
        color: #000d1a;
    }
`
const Navbar = ({toggle})=>{
    const [navbar,setNavbar] = useState(false)
    const changeNavBack = ()=>{
        if(window.scrollY >= 500){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll",changeNavBack)
    return(
        <Nav className={navbar?"navbar active":"navbar"}  >
            
                <Logo to="/">OMIXR</Logo>
                <MenuBars onClick={toggle}/>
                <Navmenu>
                    {menuData.map((item,index)=>{
                        return(
                            <NavMenuLinks  key={index}>
                                
                                {item.title}
                            </NavMenuLinks>
                        )
                        })}
                </Navmenu>
                <NavBtn>
                    <Btn to="/contact " >Contact Us</Btn>
                </NavBtn>
        </Nav>
    )
}

export default Navbar;