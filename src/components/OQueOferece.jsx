import React from "react";
import styled from "styled-components";

const Features = styled.section`
  height: 40vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .features-info {
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .features p {
    line-height: 2rem;
    width: 20vw;
  }
`;

function OQueOferece() {
  return (
    <Features className="o-que-oferece">
      <h2>Porquê?</h2>

      <div className="features-info">
        <div className="encontraras-img">
          <img src="" alt="music" />
        </div>
        <div className="features">
          <article>
            <h4>Feature 1</h4>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              quidem aspernatur!
            </p>
          </article>
          <article>
            <h4>Feature 2</h4>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              quidem aspernatur!
            </p>
          </article>
          <article>
            <h4>Feature 3</h4>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              quidem aspernatur!
            </p>
          </article>
        </div>
      </div>
    </Features>
  );
}

export default OQueOferece;
