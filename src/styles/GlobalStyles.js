import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Avenir;
    width: 100vw;
    height: 100vh;
}

main{
    height: 100vh;
    width: 100vw;
    ${"" /* padding: 1rem 3rem; */}
}

a{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
}

a:hover{
    color: ${({ theme }) => theme.colors.mint};
}

h1, h2, h3, h4, h5, h6{
}

h1{
font-size: 2rem;
}
`;

export default GlobalStyle;
