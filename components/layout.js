import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
