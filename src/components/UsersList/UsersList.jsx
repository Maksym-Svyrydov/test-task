import { useState, useEffect } from 'react';
import { fetchUsers } from '../../API/AxiosAPI';
import User from '../User/User';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(3);

  useEffect(() => {
    fetchUsers(count).then((result) => {
      setUsers(result);
    });
  }, [count]);
  const loadMore = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {users.map(({ id, avatar, name, followers, tweets }) => (
        <User key={id} avatar={avatar} followers={followers} tweets={tweets} />
      ))}
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default UsersList;
