import { useState, useEffect } from 'react';
import { fetchUsers, getTotalUsers } from '../../API/AxiosAPI';
import { Wrapper } from './UsersList.styled';
import { FilterStarus } from '../FilterStaus/FilterStatus';
import { UserList } from './UsersList.styled';
import User from '../User/User';
import { LoadMore } from '../LoadMore/LoadMore.styled';

const UsersList = () => {
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(3);
  const [totalUser, setTotalUser] = useState();

  console.log(users.length);
  const handleFilter = (filter) => {
    setFilter(filter);
    setPage(3);
  };

  const onloadMore = () => {
    setPage(page + 3);
  };

  useEffect(() => {
    fetchUsers(page, filter).then((result) => {
      setUsers(result);
      setFilter(filter);
    });
  }, [page, filter]);

  useEffect(() => {
    getTotalUsers(filter).then((result) => {
      setTotalUser(result.length);
    });
  });

  return (
    <Wrapper>
      <FilterStarus handleFilter={handleFilter} />
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
      </UserList>
      {page < totalUser && (
        <LoadMore onClick={onloadMore}>Load More...</LoadMore>
      )}
    </Wrapper>
  );
};

export default UsersList;
