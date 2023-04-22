import axios from 'axios';

axios.defaults.baseURL = 'https://6441991776540ce2257af115.mockapi.io';

export const fetchUsers = async (count) => {
  const result = await axios.get(`/users`, {
    params: {
      limit: count,
    },
  });
  return result.data;
};
