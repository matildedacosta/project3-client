import React from "react";
import styled from "styled-components";

const SobreMusiTribo = styled.section`
  padding: 1.5rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;

  h2 {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
  }

  p {
    font-size: 0.65rem;
    line-height: 1.5rem;
  }
`;

function Sobre() {
  return (
    <SobreMusiTribo>
      <h2>Como nasceu a MusiTribo?</h2>
      <p>
        A MusiTribo nasce de uma vontade de fazer música e de unir a força que
        tantos de nós temos de fazer mais, diferente e melhor. O apoio e a
        partilha são fundamentais para a evolução da indústria da música e o
        objetivo desta aplicação é contribuir para este mesmo fim, abrindo
        portas a artistas, músicos, técnicos com menos visibilidade.
        <br />
        Existem muitas histórias de muitos talentos que ficam pelas ideias, pois
        não encontram um caminho ou um apoio para começar, para ultrapassar,
        para criar. A MusiTribo procura criar um abrigo e ao mesmo tempo um
        impulsionar para toda a gente que quer fazer música. A colaboração é
        fomentada através da oportunidade de criação de eventos, como campos de
        escrita e dias de estúdio, e de convidar outros profissionais através da
        plataforma.
        <br />
        Um país tão pequeno com tanta alma: porque não partilhá-la por via de
        vibrações?
      </p>
    </SobreMusiTribo>
  );
}

export default Sobre;
