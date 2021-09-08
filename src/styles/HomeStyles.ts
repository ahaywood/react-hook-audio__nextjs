import styled from "styled-components";

export const StyledGrid = styled.div`
  background: url('/images/bg.jpg') center top no-repeat,
    url('/images/bg-grunge.jpg') center top repeat-y;
  background-size: 100% auto, 100% auto;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-bottom: 115px;

  header {
    align-items: center;
    display: flex;
    grid-column: 7 / -1;
    min-height: 970px;

    h1 {
      font-family: ${props => props.theme.fonts.contrail};
      font-size: 31.5rem;
      line-height: 26rem;
      color: white;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(137.73deg, #A12DE0 2.88%, #6FC7EC 100.36%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .octocat {
    position: fixed;
    right: 0;
    top: 0;
  }

  nav {
    color: white;
    font-size: 48px;
  }

  ol {
    counter-reset: ordered-list;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-family: ${props => props.theme.fonts.geo};
      font-size: 2.8rem;
      font-style: italic;
      line-height: 5.5rem;
      margin: 0 0 20px 0;
      padding: 0;
      position: relative;

      &:before {
        color: ${props => props.theme.colors.balticSea};
        content: counter(ordered-list, decimal-leading-zero);
        counter-increment: ordered-list;
        font-size: 14.5rem;
        font-style: normal;
        left: -30px;
        position: absolute;
        top: -8px;
        z-index: 1;
      }

      a {
        color: ${props => props.theme.colors.white};
        padding: 0;
        position: relative;
        text-decoration: none;
        transition: padding-left 0.25s ease-in-out, color 0.25s ease-in-out;
        z-index: 2;

        &:hover {
          color: ${props => props.theme.colors.turquoise};
          padding-left: 10px;
        }
      }

    }
  }

  .intro {
    grid-column: 5 / -2;

    h4 {
      font-family: ${props => props.theme.fonts.contrail};
      font-size: 4.8rem;
      color: ${props => props.theme.colors.turquoise};
      margin: 0;
      padding: 0;
    }

    p {
      font-family: ${props => props.theme.fonts.barlow};
      font-size: 1.6rem;
      line-height: 2.7rem;
      color: white;
    }
  }

  .aside {
    grid-column: 2 / span 3;

    h4 {
      color: ${props => props.theme.colors.daffadil};
      font-family: ${props => props.theme.fonts.geo};
      font-style: italic;
      font-size: 2rem;
    }

    ul {
      font-family: ${props => props.theme.fonts.dank};
      color: ${props => props.theme.colors.white};
      font-size: 1.6rem;
      line-height: 2.7rem;
      list-style-type: none;
      margin: 0;
      padding: 0;
      padding-left: 10px;
    }
  }

  .content {
    grid-column: span 7;

    h2 {
      font-family: ${props => props.theme.fonts.geo};
      font-size: 8rem;
      line-height: 10rem;
      color: ${props => props.theme.colors.white};
      font-style: italic;
      font-weight: normal;
      padding: 0;
      margin: 0;
    }

    h3 {
      font-family: ${props => props.theme.fonts.geo};
      font-size: 2.8rem;
      color: ${props => props.theme.colors.daffadil};
      font-style: italic;
      font-weight: normal;
    }

    p {
      color: ${props => props.theme.colors.white};
      font-family: ${props => props.theme.fonts.barlow};
      font-size: 1.6rem;
      line-height: 2.7rem;
    }
  }

  .question {
    font-family: ${props => props.theme.fonts.contrail};
    font-size: 2.8rem;
    line-height: 4.2rem;
    position: relative;

    a {
      color: ${props => props.theme.colors.turquoise};
      text-decoration: none;
    }

    .plus-close {
      position: absolute;
      left: -25px;
    }
  }

  .answer {
    font-family: ${props => props.theme.fonts.barlow};
    font-size: 1.6rem;
    line-height: 2.7rem;
    color: ${props => props.theme.colors.white};
  }
`;

export const StyledFooter = styled.div`
  background: ${props => props.theme.colors.white};
  text-align: center;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.barlow};
  font-size: 1.6rem;
  padding: 70px 0;

  p {
    margin-bottom: 50px;
  }

  a {
    color: ${props => props.theme.colors.black};
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }
  }

  .hosted-on {
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
      margin-bottom: 3px;
      margin-right: 5px;
    }
  }

`;