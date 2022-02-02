import Head from "next/head";
import styled from "@emotion/styled";

import { NavBar } from "../components/NavBar";

import { Title1, Title2, BigP, Strong } from "../components/Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net - Styleguide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Title1>Styleguide</Title1>
      <Section>
        <Title2>Colors</Title2>
        <Example>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <ColorCard name="Black" hex="#212121" />
            <ColorCard name="Primary" hex="#30475e" />
            <ColorCard name="Secondary" hex="#f05454" />
            <ColorCard name="White" hex="#F2F2F2" />
          </div>
        </Example>
      </Section>

      <Section>
        <Title2>Headings</Title2>
        <Example>
          <Title1>Heading 1</Title1>
          <Title2>Heading 2</Title2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </Example>
      </Section>

      <Section>
        <Title2>Prose example</Title2>
      </Section>
    </>
  );
}

const ColorCard = ({ name, hex }) => (
  <div>
    <div
      css={{
        height: "var(--space-80)",
        width: "var(--space-80)",
        borderRadius: "var(--border-radius-sm)",
        border: "1px solid var(--color-gray-200)",
        background: hex,
      }}
    />
    <p css={{ fontSize: "var(--font-size-sm)" }}>{name}</p>
  </div>
);

const Swatch = styled.div`
  height: var(--space-80);
  width: var(--space-80);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-gray-200);
`;

const Section = styled.div`
  margin-top: var(--space-64);
`;

const Example = styled.div`
  background: #fff;
  padding: var(--space-32);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-base);
`;
