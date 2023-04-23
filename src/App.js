import { AppBar } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';

import UsersList from './components/UsersList/UsersList';
export const App = () => {
  return (
    <Layout>
      <AppBar />
      <UsersList />
    </Layout>
  );
};
export default App;
