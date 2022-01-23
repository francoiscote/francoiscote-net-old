import Head from "next/head";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div css={{ marginTop: "5em" }}>
        <HugeTitle>François Côté</HugeTitle>
        <div css={{ marginBottom: "var(--space-12)" }}>
          <StrongP>Web Developer</StrongP>
          <StrongP>Montréal, Québec, Canada.</StrongP>
        </div>
        <StrongP>
          <a href="https://www.github.com/francoiscote">GitHub</a>
        </StrongP>
      </div>
    </>
  );
}

const HugeTitle = styled.h1`
  font-size: var(--font-size-3xl);
  letter-spacing: -0.03em;
  background-clip: text;
  -webkit-background-clip: text;
`;

const StrongP = styled.p`
  font-weight: 500;
`;
