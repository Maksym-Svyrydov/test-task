import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Layout, NavContainer, NavItem, NavList } from './Sharedlayout.styled';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #5cd3a8;
  }
`;
export const SharedLayout = () => {
  return (
    <Layout>
      <NavContainer>
        <NavList>
          <NavItem>
            <StyledLink
              style={{
                display: 'flex',
                textDecoration: 'none',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '22px',
                textTransform: 'uppercase',
              }}
              to="/"
              end
            >
              Home
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              style={{
                textDecoration: 'none',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '22px',
                textTransform: 'uppercase',
              }}
              to="/tweet"
            >
              Tweets
            </StyledLink>
          </NavItem>
        </NavList>
      </NavContainer>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
// export default SharedLayout;
