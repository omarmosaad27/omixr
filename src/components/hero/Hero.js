import React,{useState,useRef,useEffect} from 'react'
import styled from 'styled-components/macro'
import {Btn} from '../utility/Button'
import {FaArrowRight} from 'react-icons/fa'
import {BiRightArrowCircle,BiLeftArrowCircle} from 'react-icons/bi'
const HeroSection = styled.section`
    height:100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;

` 
const HeroWrapper = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`
const HeroSlide =styled.div `
    z-index:1;
    width: 100%;
    height: 100%;
`
const HeroSlider =styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &::before{
        content: "";
        width: 100%;
        height: 100vh;
        z-index:2;
        bottom: 0vh;
        left: 0;
        position: absolute;
        overflow: hidden;
        opacity: 0.8;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2)0%,
            rgba(0,0,0,0.2)50%,
            rgba(0,0,0,0.7) 100%);
    }
`
const HeroImage =styled.img `
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    
`
const HeroContent =styled.div `
    position: relative;
    z-index:10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% -100px);
    color: #fff;
    padding: 0 3rem;
    h1{
        font-size: clamp(1rem, 0.2500rem + 3.3333vw, 2rem);
        margin-bottom: 20px;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    p{
        margin-bottom: 20px;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`
const Arrow =styled(FaArrowRight) `
    margin-left: 10px;
`
const SliderButtons =styled.div `
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 100;
    display: flex;
`
const Prevarrow = styled(BiLeftArrowCircle) `
    color: #000d1a;
    cursor: pointer;
    width: 50px;
    height: 50px;
    transition: 0.3s;
    &:hover{
        opacity: 0.9;
        transform: scale(1.2);
    }
`
const Nextarrow = styled(BiRightArrowCircle) `
    color: #000d1a;
    cursor: pointer;
    width: 50px;
    height: 50px;
    transition: 0.3s;
    margin-left: 10px;
    &:hover{
        opacity: 0.9;
        transform: scale(1.2);
    }
`
const Hero = ({slides}) => {
    const [current,setCurrent] = useState(0)
    const length = slides.length
    const timeOut = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1) )
        }
        timeOut.current = setTimeout(nextSlide, 5000)
        return function (){
            if(timeOut.current){
                clearTimeout(timeOut.current)
            }
        }
    }, [current,length])

    const nextSlide = () => {
        if(timeOut.current){
            clearTimeout(timeOut.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current)
    }
    const prevSlide = ()=>{
        if(timeOut.current){
            clearTimeout(timeOut.current)
        }
        setCurrent(current === 0 ? length -1 : current - 1)
        console.log(current)
    }
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }
    return(
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide,index)=>{
                    return(
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}/>
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Btn to={slide.path} primary ="true" > {slide.label} <Arrow/></Btn>
                                    </HeroContent>
                                
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <Prevarrow onClick={prevSlide}/>
                    <Nextarrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
            
        </HeroSection>
    )
}
export default Hero 