import { useState, useEffect } from 'react';
import { fetchUsers, getTotalUsers } from '../../API/AxiosAPI';
import User from '../User/User';
import { UserList } from './UsersList.styled';
import { LoadMore } from '../LoadMore/LaodMore.styled';
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(3);
  const [totalPage, setTotalpage] = useState([]);

  const onloadMore = () => {
    setPage(page + 3);
  };

  useEffect(() => {
    fetchUsers(page).then((result) => {
      setUsers(result);
    });
  }, [page]);
  useEffect(() => {
    getTotalUsers().then((result) => {
      setTotalpage(result.length);
    });
  });

  return (
    <UserList>
      {users.map(({ id, avatar, followers, tweets, followStatus }) => (
        <User
          key={id}
          id={id}
          avatar={avatar}
          followers={followers}
          tweets={tweets}
          followStatus={followStatus}
        />
      ))}
      {page < totalPage && (
        <LoadMore onClick={onloadMore}>Load More...</LoadMore>
      )}
    </UserList>
  );
};

export default UsersList;
