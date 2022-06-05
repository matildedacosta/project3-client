import React from "react";
import styled from "styled-components";

//Icons and Pics
import chat from "../assets/pictures/chat.png";
import evento from "../assets/pictures/evento.png";
import tribo from "../assets/pictures/tenda-da-tribo.png";
import music from "../assets/pictures/followmusic.jpg";

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
    height: 27vh;
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
`;

function OQueOferece() {
  return (
    <Features className="o-que-oferece">
      <h2>Porquê?</h2>

      <div className="features-info">
        <div className="encontraras-img">
          <img src={music} alt="music" />
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
