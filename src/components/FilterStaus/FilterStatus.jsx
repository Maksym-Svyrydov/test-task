import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import {
  Wrapper,
  Section,
  Title,
  AllBtn,
  SectionFilters,
  FollowBtn,
  FollowingsBtn,
  GoBack,
} from './FilterStarus.styled';

export const FilterStarus = ({ handleFilter }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <Wrapper>
      <Section>
        <Title>Filter by users status</Title>
        <GoBack>
          <Link
            style={{
              display: 'flex',
              textDecoration: 'none',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '22px',
              textTransform: 'uppercase',
            }}
            to={backLinkHref.current}
          >
            Go BACK
          </Link>
        </GoBack>
      </Section>
      <SectionFilters>
        <AllBtn
          onClick={(e) => {
            handleFilter(e.currentTarget.value);
          }}
          value={''}
          type="button"
        >
          All
        </AllBtn>

        <FollowBtn
          onClick={(e) => {
            handleFilter(e.currentTarget.value);
          }}
          value={'false'}
          type="button"
        >
          Follow
        </FollowBtn>

        <FollowingsBtn
          onClick={(e) => {
            handleFilter(e.currentTarget.value);
          }}
          value={'true'}
          type="button"
        >
          Followings
        </FollowingsBtn>
      </SectionFilters>
    </Wrapper>
  );
};
