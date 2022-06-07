import React from "react";
import styled from "styled-components";

//Icons and Pics
import chat from "../assets/pictures/chat.png";
import evento from "../assets/pictures/evento.png";
import tribo from "../assets/pictures/tenda-da-tribo.png";
import music from "../assets/pictures/followmusic.jpg";

import musicscreen from "../assets/pictures/background3.jpg";

const Features = styled.section`
  font-size: 0.6rem;
  //height: 30vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.red};
    margin-bottom: 0.8rem;
  }

  .encontraras-img img {
    max-height: 27vh;
    border-radius: 5px;
    margin-right: 2rem;
  }

  .icon {
    height: 3vh;
    margin-right: 0.5rem;
  }

  .features-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    height: 30vh;
  }

  .features p {
    line-height: 1rem;
    width: 30vw;
  }

  .features article {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 0.5rem;
  }

  .feature-info {
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    width: 40vw;
  }

  #pc-img {
    display: none;
  }

  @media (min-width: 700px) {
    padding: 3rem;
    font-size: 1rem;
    height: 50vh;

    h2 {
      font-size: 2rem;
    }

    .feature-info {
      gap: 5px;
    }

    .icon {
      height: 5vh;
      margin-right: 2rem;
    }

    p {
      font-size: 0.9rem;
    }

    .features-info {
      padding: 5rem;
    }
    #pc-img {
      display: flex;
      width: 25vw;
      height: 60vh;
      margin-left: 15rem;
    }

    #phone-img {
      display: none;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-left: 10rem;
    }
  }
`;

function OQueOferece() {
  return (
    <Features className="o-que-oferece">
      <h2>Porquê?</h2>

      <div className="features-info">
        <div className="encontraras-img">
          <img id="phone-img" src={music} alt="music" />
          <img id="pc-img" src={musicscreen} alt="music" />
        </div>
        <div className="features">
          <article>
            <img className="icon" src={tribo} alt="icon" />
            <div className="feature-info">
              <h4>Cria a tua tribo</h4>
              <p>Procura e segue músicos que gostes!</p>
            </div>
          </article>
          <article>
            <img className="icon" src={chat} alt="icon" />
            <div className="feature-info">
              <h4>Conecta-te com a tua tribo</h4>
              <p>Envia mensagens e vai a eventos!</p>
            </div>
          </article>
          <article>
            <img className="icon" src={evento} alt="icon" />
            <div className="feature-info">
              <h4>Cria os teus eventos</h4>
              <p>Convida a tua tribo para um writing camp, concerto...</p>
            </div>
          </article>
        </div>
      </div>
    </Features>
  );
}

export default OQueOferece;
