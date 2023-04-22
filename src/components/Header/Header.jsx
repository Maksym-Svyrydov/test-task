import { Header, Section, Title } from './Header.styled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <Title>Users</Title>
      </Section>
      <Section>
        <Title>Filter by users status</Title>
      </Section>
    </Header>
  );
};
