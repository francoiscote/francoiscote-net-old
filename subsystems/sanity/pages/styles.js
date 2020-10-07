import styled from 'styled-components'

/**
 * Colors
 * ---------
 * #e63946
 * #f1faee
 * #a8dadc
 * #457b9d
 * #1d3557
 */

export const Main = styled.div`
  background: #FFF;
  color: #1d3557;
  font-family: 'IBM Plex Serif', Georgia, 'Times New Roman', Times, serif;
  font-size: 1.2em;
  line-height: 1.2;
  min-height: 100vh;
`;

export const Section = styled.section`
  padding: 2em 0;
`

export const Hero = styled.div`
  padding: 5em 0 4em;
  background: #1d3557;
  background: linear-gradient(15deg, #000, #1d3557);
  color: #fff;
  text-align: center;

  @keyframes fadeFromBottom {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes fadeScale {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  span,
  p {
    display: inline-block;
    animation: fadeFromBottom 800ms cubic-bezier(0.01, 0.66, 0.52, 1.01) 500ms;
    animation-fill-mode: backwards;

    &:nth-child(2),
    &:nth-child(3) {
      animation-duration: 1200ms;
      animation-delay: 1500ms;
    }
  }

  p {
    display: block;
    margin: 1em auto 0;
    font-size: 1.2em;
    max-width: 580px;
  }

  h1 span {
    &:nth-child(3) {
      animation-delay: 700ms;
    }
    &:nth-child(2) {
      animation-delay: 1000ms;
    }
  }

  .emoji {
    /* font-size: 3em; */
    display: inline-block;
    animation: fadeScale 1200ms ease-out 1000ms;
    animation-fill-mode: backwards;
  }

  .glow {
    animation-name: glow;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0px 0px 20px rgba(252, 88, 3, 1);
    }

    to {
      text-shadow: 0px 0px 45px rgba(255, 173, 94, 0.8);
    }
  }
`;

export const Container = styled.div`
  margin: 0 2em;
  @media (min-width: 1000px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  margin-bottom: 2em;
`

export const H1 = styled.h1`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 3em;
  @media (min-width: 780px) {
    font-size: 4em;
  }
  font-weight: 800;

  color: #a8dadc;
  text-shadow: 0 0 6px rgba(228, 243, 244, 0.4);

  margin: 0 0 1em;
  padding: 0;

  span.light {
    color: #a8dadc;
  }
`;

export const H2 = styled.h2`
  color: #1d3557;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  @media (min-width: 780px) {
    font-size: 2em;
  }
  line-height: 1.1;
  margin: 0 0 10px;
  padding: 0;

  span {
    font-weight: 400;
  }
`;

export const H3 = styled.h3`
  font-size: 1.6em;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  color: #e63946;
  margin: 0;
  padding: 0;
`;

export const Job = styled.div`
  padding: 5em 0;
  margin: 1em 0;

  @media (min-width: 780px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & + & {
    border-top: 1px solid #a2b4b5;
  }
`;

export const JobTitleContainer = styled.div`
  flex: 0 0 100%;
  margin-bottom: 80px;
  @media (min-width: 780px) {
    margin-bottom: 1em;
  }
`;
export const JobImage = styled.div`
  flex: 0 1 40%;
  text-align: center;
  margin-bottom: 2em;
  @media (min-width: 780px) {
    margin-bottom: 0;
  }

  img {
    margin: 0 auto;
    width: 100%;
    @media (min-width: 480px) {
      width: 70%;
    }
    @media (min-width: 780px) {
      width: 100%;
    }
    height: auto;

    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2)
  }

  .flip & {
    order: 2;
  }
`;
export const JobContent = styled.div`
  flex: 0 1 55%;

  p {
    margin: 0 0 1em;
    line-height: 1.4;
  }

  .flip & {
    order: 1;
  }
`;

export const CloserSection = styled(Section)`
  background: linear-gradient(15deg, #1d3557, #000);
  color: #f1faee;

  padding: 7em 0;
  text-align: center;

  div {
    margin-top: 2em;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
  outline: none;
  padding: 20px;
  margin-top: 2em;
  background: #e63946;

  transition: 200ms ease-out background;

  &:hover {
    background: #d72030;
  }
`;


export const Link = styled.a`
  background: #dcf0f1;
  font-weight: 600;
  padding: 0 5px;
  color: #1d3557;
  transition-property: color, background;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  &:hover {
    /* background: #a8dadc; */
    background: #457b9d;
    color: #fff;
  }
`;