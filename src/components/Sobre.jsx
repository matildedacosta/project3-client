import React from "react";
import styled from "styled-components";

const SobreMusiTribo = styled.section`
  padding: 1.5rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;

  p {
    width: 70vw;
    line-height: 2rem;
  }
`;

function Sobre() {
  return (
    <SobreMusiTribo>
      <h2>Como nasceu a MusiTribo?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        recusandae sint repudiandae adipisci aspernatur, delectus deserunt.
        Laboriosam, molestias, dolorum id dolore, facere vitae quaerat sequi
        sint veritatis explicabo voluptates ipsa. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Ea pariatur, veritatis ipsum quas dolor
        sequi laboriosam expedita necessitatibus harum dolorum rem nulla
        quisquam cumque! Quisquam porro dolores inventore animi sed? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Ipsum recusandae sint
        repudiandae adipisci aspernatur, delectus deserunt. Laboriosam,
        molestias, dolorum id dolore, facere vitae quaerat sequi sint veritatis
        explicabo voluptates ipsa. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ea pariatur, veritatis ipsum quas dolor sequi
        laboriosam expedita necessitatibus harum dolorum rem nulla quisquam
        cumque! Quisquam porro dolores inventore animi sed? Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Ipsum recusandae sint
        repudiandae adipisci aspernatur, delectus deserunt. Laboriosam,
        molestias, dolorum id dolore, facere vitae quaerat sequi sint veritatis
        explicabo voluptates ipsa. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ea pariatur, veritatis ipsum quas dolor sequi
        laboriosam expedita necessitatibus harum dolorum rem nulla quisquam
        cumque! Quisquam porro dolores inventore animi sed? Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Ipsum recusandae sint
        repudiandae adipisci aspernatur, delectus deserunt. Laboriosam,
        molestias, dolorum id dolore, facere vitae quaerat sequi sint veritatis
        explicabo voluptates ipsa. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ea pariatur, veritatis ipsum quas dolor sequi
        laboriosam expedita necessitatibus harum dolorum rem nulla quisquam
        cumque! Quisquam porro dolores inventore animi sed?
      </p>
    </SobreMusiTribo>
  );
}

export default Sobre;
