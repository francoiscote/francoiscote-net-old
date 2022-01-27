import { Container } from "./Container";

export function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
