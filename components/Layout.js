import styled from "@emotion/styled";

export function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: var(--space-16);
  padding-right: var(--space-16);
`;
