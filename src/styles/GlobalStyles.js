import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
}

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    height: 100vh;
}

${
  "" /* main{
    height: 100vh;
    width: 100vw;
    padding: 1rem 3rem;
} */
}

a{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
}

a:hover{
    color: ${({ theme }) => theme.colors.mint};
}

h1{
font-size: 2rem;
}
`;

export default GlobalStyle;
