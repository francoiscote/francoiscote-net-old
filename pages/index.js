import Head from "next/head";
import styled from "@emotion/styled";

import { NavBar } from "../components/NavBar";
import { Title1, BigP, Strong } from "../components/Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net</title>
      </Head>

      <NavBar />

      <div css={{ textAlign: "center", marginTop: "var(--space-80)" }}>
        <Title1>Bonjour,</Title1>
        <div css={{ marginBottom: "var(--space-12)" }}>
          <BigP>
            My name is <Strong>François Côté</Strong>,
            <br />
            and I am a <Strong>Web Developer</Strong> based in{" "}
            <Strong>Montréal (QC), Canada</Strong>.
          </BigP>
        </div>
        <p css={{ marginTop: "var(--space-32)" }}>
          <a href="https://www.github.com/francoiscote">github</a>
        </p>
      </div>
    </>
  );
}
