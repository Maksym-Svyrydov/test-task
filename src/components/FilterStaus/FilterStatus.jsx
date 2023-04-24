import {
  Wrapper,
  Section,
  Title,
  AllBtn,
  SectionFilters,
  FollowBtn,
  FollowingsBtn,
} from './FilterStarus.styled';

export const FilterStarus = ({ handleFilter }) => {
  return (
    <Wrapper>
      <Section>
        <Title>Filter by users status</Title>
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
