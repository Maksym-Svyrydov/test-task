import { Header, Section, Title } from './Header.styled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
      </Section>
      <Section>
        <Title>Filter by status</Title>
      </Section>
    </Header>
  );
};
