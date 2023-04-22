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

// (
//     <List>
//       {movies.length > 0 &&
//         movies.map(movie => (
//           <Item key={movie.id}>
//             <Link to={`/movies/${movie.id}`} state={{ from: location }}>
//               {!!movie.poster_path && (
//                 <Img
//                   src={`${PosterUrl + movie.poster_path}`}
//                   alt={movie.title}
//                 />
//               )}
//             </Link>
//           </Item>
//         ))}
//     </List>
