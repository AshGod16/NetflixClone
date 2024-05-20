import React, {useState} from "react";
import NavBar from "../components/NavBar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay, FaInfo } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";

export default function Netflix() { // eslint-disable-line
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return (
    <Container>
      <NavBar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundImage} alt="background" className="background-image"/>
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="logo"/>
          </div>
          <div className="buttons flex">
            <button className="flex j-center a-center"> <FaPlay /> Play</button>
            <button className="flex j-center a-center"> <AiOutlineInfoCircle /> More Info</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero{
    position: relative;
    .background-image{
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(0.5);
    }
    .container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .logo{
        img{
          width: 20rem;
        }
      }
      .buttons{
        margin-top: 2rem;
        button{
          padding: 1rem 2rem;
          margin-right: 1rem;
          background-color: white;
          color: black;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bolder;
          svg{
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;