import styled from "@emotion/styled";
import Link from "next/link";
import { Container } from "./Container";

export function NavBar() {
  return (
    <StyledNavBar>
      <Container>
        <NavBarContent>
          <Link href="/">
            <a
              css={{
                textDecoration: "none",
                fontSize: "var(--font-size-md)",
                cursor: "pointer",
              }}
              aria-label="home"
            >
              🌘
            </a>
          </Link>
          {/* <div>TODO: Dark mode toggle</div> */}
        </NavBarContent>
      </Container>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  margin-bottom: var(--space-64);
`;
const NavBarContent = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: var(--space-16) 0;
  /* border-bottom: 1px solid var(--color-gray-300); */
`;
