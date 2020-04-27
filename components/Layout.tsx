import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <Container>
        <Nav>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/posts/new">
            <NavItem>Create Post</NavItem>
          </Link>
        </Nav>
      </Container>
    </Header>
    <Container>{children}</Container>
  </div>
);

const Header = styled.header`
  background: #292d3e;
`;

const Nav = styled.nav`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  display: inline-block;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Layout;
