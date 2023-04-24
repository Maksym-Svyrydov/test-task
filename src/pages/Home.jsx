import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return (
    <div state={{ from: location }}>
      <div>Welcome to my test-task</div>
    </div>
  );
};

export default Home;
