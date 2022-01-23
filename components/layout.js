import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: var(--space-16);
  padding-right: var(--space-16);
`;
